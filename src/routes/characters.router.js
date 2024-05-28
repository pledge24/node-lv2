import express from 'express';
import { prisma } from '../utils/prisma/prisma_userClient.js';
import { prisma as prisma_gamedata } from '../utils/prisma/prisma_gameDataClient.js';
import auth from '../middlewares/auth.middleware.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

/** 캐릭터 등록(POST Method) API */
router.post('/characters', auth, async (req, res) => {
  try {
    // body에 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!req.body.characterName) {
      return res
        .status(400)
        .json({ errormessage: 'Invalid request: Name is required' });
    }

    // 요청받은 characterName 데이터를 저장합니다.
    const { characterName } = req.body;

    // 중복된 캐릭터 명이 있는 지 확인하고, 만약 있다면 중복 사실을 알립니다.
    const CharacterName = await prisma.characters.findFirst({
      where: { characterName },
    });
    if (CharacterName) {
      return res
        .status(400)
        .json({ errorMessage: '이미 존재하는 캐릭터 이름입니다.' });
    }

    // Characters 모델을 사용해, 새로운 '캐릭터'를 생성합니다.
    const character = await prisma.characters.create({
      data: {
        accountId: req.account.accountId,
        characterName,
      },
    });

    // 캐릭터 등록을 성공적으로 수행했다면, 해당 사실과 함께 캐릭터 id를 반환합니다.
    return res.status(201).json({
      message: '캐릭터 생성 완료!',
      characterId: character.characterId,
    });
  } catch (error) {
    console.error('캐릭터 생성 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to create character',
    });
  }
});

/** 캐릭터 삭제(DELETE Method) API */
router.delete('/characters/:characterId', auth, async (req, res) => {
  try {
    // 삭제할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 캐릭터가 존재하지 않거나, 본인 캐릭터가 아닌 캐릭터를 삭제하려는 경우,
    // 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '본인 캐릭터가 아닌 캐릭터는 삭제 할 수 없습니다.',
      });
    }

    // 캐릭터를 DB에서 삭제합니다.
    await prisma.characters.delete({
      where: {
        characterId: +characterId,
      },
    });

    // 삭제 성공 시, 해당 사실을 클라이언트에게 전달합니다.
    return res.status(200).json({ message: '캐릭터 삭제 완료' });
  } catch (error) {
    console.error('캐릭터 삭제 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to delete character',
    });
  }
});

/** 캐릭터 상세 조회(GET Method) API */
router.get('/characters/:characterId', async (req, res) => {
  try {
    // 조회할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;
    // authorization 헤더가 존재한다면, 데이터를 가져옵니다.
    const { authorization } = req.headers;

    // authorization 헤더에 데이터가 존재한다면, 유효한 토큰인지 확인합니다.
    // 만약 해당 토큰이 유효하다면 haveValidToken를 true, 유효하지 않다면 false를 갖습니다.
    let haveValidToken = false,
      decodedToken;
    if (authorization) {
      try {
        let token = authorization.split(' ')[1];
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        haveValidToken = true;
        console.log(haveValidToken, token, decodedToken);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // 가져온 캐릭터ID를 통해 DB에서 해당 캐릭터 정보를 가져옵니다.
    // 해당 ID값을 가진 '캐릭터'가 없다면, 없다는 사실을 클라이언트에게 전달합니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터 입니다.' });
    }

    // 캐릭터 상세 정보를 저장합니다.
    const characterDetailInfo = {
      name: character.characterName,
      health: character.characterHealth,
      power: character.characterPower,
    };

    // 만약 해당 캐릭터가 본인 캐릭터라면, 소지금도 추가로 저장합니다.
    if (haveValidToken && character.accountId === decodedToken.accountId) {
      characterDetailInfo.money = character.characterMoney;
    }

    // 캐릭터 상세 조회 성공 시, 해당 사실을 클라이언트에 전달합니다.
    return res.status(200).json(characterDetailInfo);
  } catch (error) {
    console.error('캐릭터 상세 조회 오류 발생!', error);
    return res.status(500).json({
      message: "Server error: Failed to get character's detail info",
    });
  }
});

/** 캐릭터 아이템 구매 API */
router.post('/characters/:characterId/buyItems', auth, async (req, res) => {
  try {
    // 아이템을 구매할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // body에 데이터가 Array객체가 아니라면, 해당 사실을 클라이언트에 전달합니다.
    if (!Array.isArray(req.body)) {
      return res
        .status(400)
        .json({ errormessage: 'Invalid request: itemBuyList is required' });
    }

    // 클라이언트에게 전달받은 배열을 변수에 저장합니다.
    const itemBuyList = req.body;

    // characters모델에 해당 characterId를 가진 데이터를 찾습니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '본인 캐릭터로 재시도 해주세요.',
      });
    }

    // 아이템 구매 리스트에 존재하는 아이템들이 존재하는 아이템인지 확인하고,
    // 하나라도 존재하지 않는다면 해달 사실을 클라이언트에 전달을,
    // 전부 존재한다면 총 구매 금액을 저장합니다.
    let totalPrice = 0;
    let itemInfoList = {};
    for (const cur_item of itemBuyList) {
      // 비정상적인 아이템 data가 발견되었다면, 해당 사실을 클라이언트에 전달합니다.
      if (!cur_item.itemCode || !cur_item.count) {
        return res.status(400).json({
          errormessage:
            "Invalid request: Some item doesn't have itemCode, count data",
        });
      }

      // 전달받은 itemCode, count데이터를 저장합니다.
      const { itemCode, count } = cur_item;

      // item모델에 해당 itemCode를 가진 데이터를 찾습니다.
      const item = await prisma_gamedata.items.findUnique({
        where: {
          itemCode: +itemCode,
        },
      });

      // 존재하지 않는 아이템인 경우, 해당 사실을 클라이언트에 전달합니다.
      if (!item) {
        return res.status(404).json({
          errorMessage: `itemCode: ${itemCode}는 존재하지 않는 아이템입니다.`,
        });
      }

      // 찾은 아이템에 대한 정보를 저장합니다.
      itemInfoList[itemCode] = item;
      // 해당 아이템의 구매 금액을 총 구매 금액에 추가합니다.
      totalPrice += item.itemPrice * +count;
    }

    //console.log(itemInfoList);

    // 소지금이 부족한 경우, 해당 사실을 클라이언트에 전달합니다.
    if (character.characterMoney < totalPrice) {
      return res.status(400).json({ errorMessage: '소지금이 부족합니다.' });
    }

    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행합니다.
    const [updatedCharacter] = await prisma.$transaction(async (tx) => {
      // 전달받은 아이템 구매리스트의 아이템을 순회합니다.
      for (const curItem of itemBuyList) {
        // 전달받은 itemCode, count데이터를 저장합니다.
        const { itemCode, count } = curItem;

        // 현재 아이템에 대한 정보를 가져옵니다.
        const curItemInfo = itemInfoList[itemCode];

        // 캐릭터-인벤토리 DB에서 characterId, itemCode를 가지는 데이터를 가져옵니다.
        const inventoryItem = await tx.charactersInventory.findFirst({
          where: {
            characterId: +characterId,
            itemCode: +itemCode,
          },
        });

        // 만약 구매하는 아이템을 이미 소지하고 있다면 구매한 수량만큼 개수를 더하고,
        // 소지하고 있지 않았다면 해당 아이템의 레코드를 추가합니다
        if (inventoryItem) {
          await tx.charactersInventory.update({
            where: {
              characterId_itemCode: {
                characterId: +characterId,
                itemCode: +itemCode,
              },
            },
            data: {
              itemCount: {
                increment: +count,
              },
            },
          });
        } else {
          await tx.charactersInventory.create({
            data: {
              characterId: +characterId,
              itemCode: curItemInfo.itemCode,
              itemName: curItemInfo.itemName,
              itemHealth: curItemInfo.itemHealth,
              itemPower: curItemInfo.itemPower,
              itemPrice: curItemInfo.itemPrice,
              itemCount: +count,
            },
          });
        }
      }

      // 캐릭터의 소지금을 총 구매 금액만큼 감소시킵니다.
      const updatedCharacter = await tx.characters.update({
        where: {
          characterId: +characterId,
        },
        data: {
          characterMoney: {
            decrement: totalPrice,
          },
        },
      });

      // 콜백 함수의 리턴값으로 갱신된 캐릭터 정보(updatedCharacter)를 반환합니다.
      return [updatedCharacter];
    });

    // 아이템 구매 성공 시, 해당 사실을 소지 금액과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '아이템 구매 완료',
      characterMoney: updatedCharacter.characterMoney,
    });
  } catch (error) {
    console.error('아이템 구매 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to buy items',
    });
  }
});

/** 캐릭터 아이템 판매 API */
router.delete('/characters/:characterId/sellItems', auth, async (req, res) => {
  try {
    // 아이템을 판매할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // body에 데이터가 Arrya객체가 아니라면, 해당 사실을 클라이언트에 전달합니다.
    if (!Array.isArray(req.body)) {
      return res
        .status(400)
        .json({ errormessage: 'Invalid request: itemBuyList is required' });
    }

    // 클라이언트에게 전달받은 배열을 변수에 저장합니다.
    const itemBuyList = req.body;

    // characters모델에 해당 characterId를 가진 데이터를 찾습니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '해당 캐릭터에 대한 접근 권한이 없습니다.',
      });
    }

    // 아이템 판매 리스트에 존재하는 아이템들이 소지한 아이템인지 확인하고,
    // 하나라도 소지하지 않는 아이템이라면 해달 사실을 클라이언트에 전달을,
    // 전부 소지하고 있는 아이템이라면 총 판매 금액을 저장합니다.
    let totalPrice = 0;
    for (const cur_item of itemBuyList) {
      // 비정상적인 아이템 data가 발견되었다면, 해당 사실을 클라이언트에 전달합니다.
      if (!cur_item.itemCode || !cur_item.count) {
        return res.status(400).json({
          errormessage:
            "Invalid request: Some item doesn't have itemCode data or count data ",
        });
      }

      // 전달받은 itemCode, count데이터를 저장합니다.
      const { itemCode, count } = cur_item;

      // 캐릭터-인벤토리 DB에서 해당 characterId, itemCode를 가진 데이터를 찾습니다.
      const item = await prisma.charactersInventory.findUnique({
        where: {
          characterId_itemCode: {
            characterId: +characterId,
            itemCode: +itemCode,
          },
        },
      });

      // 소지하고 있지 않은 아이템이거나 수량이 부족한 경우, 해당 사실을 클라이언트에 전달합니다.
      if (!item) {
        return res.status(404).json({
          errorMessage: `itemCode: ${itemCode}는 소지하고 있지 않은 아이템입니다.`,
        });
      } else if (item.itemCount < +count) {
        return res.status(400).json({
          errorMessage: `itemCode: ${itemCode}의 수량이 부족합니다.`,
        });
      }

      // 해당 아이템의 판매 금액을 총 판매 금액에 추가합니다.
      totalPrice += item.itemPrice * +count * 0.6;
    }

    //console.log(itemInfoList);

    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행합니다.
    const [updatedCharacter] = await prisma.$transaction(async (tx) => {
      // 전달받은 아이템 판매리스트의 아이템을 순회합니다.
      for (const curItem of itemBuyList) {
        // 전달받은 itemCode, count데이터를 저장합니다.
        const { itemCode, count } = curItem;

        // 캐릭터-인벤토리 DB에서 characterId, itemCode를 가지는 데이터를 가져옵니다.
        const inventoryItem = await tx.charactersInventory.findFirst({
          where: {
            characterId: +characterId,
            itemCode: +itemCode,
          },
        });

        // 만약 아이템 판매 후에도 아이템 개수 남아있다면 판매한 수량만큼 개수를 빼고,
        // 더 이상 아이템이 남아있지않다면 해당 아이템의 레코드를 삭제합니다.
        if (inventoryItem.itemCount > count) {
          await tx.charactersInventory.update({
            where: {
              characterId_itemCode: {
                characterId: +characterId,
                itemCode: +itemCode,
              },
            },
            data: {
              itemCount: {
                decrement: +count,
              },
            },
          });
        } else {
          await tx.charactersInventory.delete({
            where: {
              characterId_itemCode: {
                characterId: +characterId,
                itemCode: +itemCode,
              },
            },
          });
        }
      }

      // 캐릭터의 소지금을 총 판매 금액만큼 증가시킵니다.
      const updatedCharacter = await tx.characters.update({
        where: {
          characterId: +characterId,
        },
        data: {
          characterMoney: {
            increment: totalPrice,
          },
        },
      });

      // 콜백 함수의 리턴값으로 갱신된 캐릭터 정보(updatedCharacter)를 반환합니다.
      return [updatedCharacter];
    });

    // 아이템 판매 성공 시, 해당 사실을 소지 금액과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '아이템 판매 완료',
      characterMoney: updatedCharacter.characterMoney,
    });
  } catch (error) {
    console.error('아이템 판매 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to sell items',
    });
  }
});

/** 캐릭터 인벤토리 조회 API */
router.get('/characters/:characterId/inventory', auth, async (req, res) => {
  try {
    // 인벤토리를 조회할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // characters모델에서 해당 characterId를 가진 데이터를 찾습니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '해당 캐릭터에 대한 접근 권한이 없습니다.',
      });
    }

    // 캐릭터-인벤토리 DB에서 characterId를 가지는 데이터들을 가져옵니다.
    const inventory = await prisma.charactersInventory.findMany({
      select: {
        itemCode: true,
        itemName: true,
        itemCount: true,
      },
      where: {
        characterId: +characterId,
      },
    });

    // 인벤토리 조회 성공 시, 해당 사실을 인벤토리 내역과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '인벤토리 조회 완료',
      inventory: inventory,
    });
  } catch (error) {
    console.error('인벤토리 조회 오류 발생!', error);
    return res.status(500).json({
      message: "Server error: Failed to show character's inventory",
    });
  }
});

/** 장착한 아이템 목록 조회 API */
router.get('/characters/:characterId/equippedItems', async (req, res) => {
  try {
    // 장착한 아이템 목록을 조회할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // characters모델에 해당 characterId를 가진 데이터를 찾습니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않는 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    }

    // 캐릭터-장착 DB에서 해당 characterId를 가지는 데이터를 가져옵니다.
    const equippedItems = await prisma.charactersEquipment.findMany({
      select: {
        itemCode: true,
        itemName: true,
      },
      where: {
        characterId: +characterId,
      },
    });

    // 장착한 아이템 목록 조회 성공 시, 해당 사실을 장착한 아이템 목록과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '장착 아이템 조회 완료',
      equippedItems: equippedItems,
    });
  } catch (error) {
    console.error('장착한 아이템 목록 조회 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to show equipped items',
    });
  }
});

/** 아이템 장착 API */
router.post('/characters/:characterId/equip', auth, async (req, res) => {
  try {
    // 아이템을 장착할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // characters모델에 해당 characterId를 가진 데이터를 찾습니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '해당 캐릭터에 대한 접근 권한이 없습니다.',
      });
    }

    // body에 itemCode 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!req.body.itemCode) {
      return res
        .status(400)
        .json({ errormessage: 'Invalid request: itemCode is required' });
    }

    // body로 전달받은 itemCode를 저장합니다.
    const { itemCode } = req.body;

    // 캐릭터-인벤토리 DB에서 해당 characterId, itemCode를 가지는 데이터를 가져옵니다.
    const item = await prisma.charactersInventory.findUnique({
      where: {
        characterId_itemCode: {
          characterId: +characterId,
          itemCode: +itemCode,
        },
      },
    });

    // 캐릭터-장착 DB에서 해당 characterId, itemCode를 가지는 데이터를 가져옵니다.
    const equippedItem = await prisma.charactersEquipment.findUnique({
      where: {
        characterId_itemCode: {
          characterId: +characterId,
          itemCode: +itemCode,
        },
      },
    });

    // 만약 해당 아이템을 소지하고 있지 않거나, 이미 장착한 아이템이라면,
    // 해당 사실을 클라이언트에 전달합니다.
    if (!item) {
      return res
        .status(404)
        .json({
          errormessage: `itemCode: ${itemCode}는 소지하고 있지 않은 아이템입니다.`,
        });
    } else if (equippedItem) {
      return res
        .status(409)
        .json({
          errormessage: `itemCode: ${itemCode}는 이미 장착한 아이템입니다.`,
        });
    }

    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행합니다.
    const [updatedEquipment, updatedCharacter] = await prisma.$transaction(
      async (tx) => {
        // 캐릭터-장착 DB에서 해당 아이템을 추가합니다.
        const updatedEquipment = await tx.charactersEquipment.create({
          data: {
            characterId: +characterId,
            itemCode: item.itemCode,
            itemName: item.itemName,
            itemHealth: item.itemHealth,
            itemPower: item.itemPower,
            itemPrice: item.itemPrice,
          },
        });

        // 캐릭터-인벤토리 DB에서 해당 characterId, itemCode를 가지는 데이터를 가져옵니다.
        const inventoryItem = await tx.charactersInventory.findFirst({
          where: {
            characterId: +characterId,
            itemCode: +itemCode,
          },
        });

        // 만약, 아이템의 개수가 2개 이상이라면 해당 아이템의 개수를 1 감소시키고,
        // 그렇지 않으면(아이템의 개수가 1개인 경우) 해당 아이템의 레코드를 삭제합니다.
        if (inventoryItem.itemCount - 1 > 0) {
          await tx.charactersInventory.update({
            where: {  // 2개 이상 소지한 경우
              characterId_itemCode: {
                characterId: +characterId,
                itemCode: +itemCode,
              },
            },
            data: {
              itemCount: {
                decrement: 1,
              },
            },
          });
        } else {  // 1개만 소지하고 있는 경우
          await tx.charactersInventory.delete({
            where: {
              characterId_itemCode: {
                characterId: +characterId,
                itemCode: +itemCode,
              },
            },
          });
        }

        // 장착한 아이템 스텟만큼 캐릭터 스텟을 증가시킵니다.
        const updatedCharacter = await tx.characters.update({
          where: {
            characterId: +characterId,
          },
          data: {
            characterHealth: {
              increment: item.itemHealth,
            },
            characterPower: {
              increment: item.itemPower,
            },
          },
        });

        // 콜백 함수의 리턴값으로 갱신된 캐릭터 정보(updatedCharacter)를 반환합니다.
        return [updatedEquipment, updatedCharacter];
      }
    );

    // 클라이언트에 전달할 캐릭터 스텟 객체를 생성합니다.
    const updatedCharacterStat = {
      health: updatedCharacter.characterHealth,
      power: updatedCharacter.characterPower,
    };

    // 아이템 장착 성공 시, 해당 사실을 변경된 캐릭터 스텟과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '아이템 장착 완료',
      updatedCharacterStat: updatedCharacterStat,
    });
  } catch (error) {
    console.error('아이템 장착 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to equip item',
    });
  }
});

/** 아이템 탈착 API */
router.delete('/characters/:characterId/unequip', auth, async (req, res) => {
  try {
    // 아이템을 탈착할 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // characters모델에 해당 characterId를 가지는 데이터를 가져옵니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '해당 캐릭터에 대한 접근 권한이 없습니다.',
      });
    }

    // body에 itemCode 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!req.body.itemCode) {
      return res
        .status(400)
        .json({ errormessage: 'Invalid request: itemCode is required' });
    }

    // body로 전달받은 itemCode를 저장합니다.
    const { itemCode } = req.body;

    // 캐릭터-장착 DB에서 해당 characterId, itemCode를 가지는 데이터를 가져옵니다.
    const equippedItem = await prisma.charactersEquipment.findUnique({
      where: {
        characterId_itemCode: {
          characterId: +characterId,
          itemCode: +itemCode,
        },
      },
    });

    // 해당 아이템 장착 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!equippedItem) {
      return res
        .status(404)
        .json({
          errormessage: `itemCode: ${itemCode}는 장착하지 않은 아이템입니다.`,
        });
    }

    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행합니다.
    const [updatedCharacter] = await prisma.$transaction(async (tx) => {
      // 캐릭터-장착 DB에서 해당 아이템 장착 데이터를 삭제합니다.
      await tx.charactersEquipment.delete({
        where: {
          characterId_itemCode: {
            characterId: +characterId,
            itemCode: +itemCode,
          },
        },
      });

      
      // 캐릭터-인벤토리 DB에서 해당 characterId, itemCode를 가지는 데이터를 가져옵니다.
      const inventoryItem = await tx.charactersInventory.findFirst({
        where: {
          characterId: +characterId,
          itemCode: +itemCode,
        },
      });

      // 만약 데이터가 존재한다면 아이템의 개수를 1 증가시킵니다,
      // 그렇지 않으면(해당 아이템을 소지하고 있지 않는 경우) 해당 아이템의 레코드를 생성합니다.
      if (inventoryItem) {  // 소지하고 있는 경우.
        await tx.charactersInventory.update({
          where: {
            characterId_itemCode: {
              characterId: +characterId,
              itemCode: +itemCode,
            },
          },
          data: {
            itemCount: {
              increment: 1,
            },
          },
        });
      } else {  // 소지하고 있지 않은 경우
        await tx.charactersInventory.create({
          data: {
            characterId: +characterId,
            itemCode: equippedItem.itemCode,
            itemName: equippedItem.itemName,
            itemHealth: equippedItem.itemHealth,
            itemPower: equippedItem.itemPower,
            itemPrice: equippedItem.itemPrice,
            itemCount: 1,
          },
        });
      }

      // 탈착한 아이템 스텟만큼 캐릭터 스텟을 감소시킵니다.
      const updatedCharacter = await tx.characters.update({
        where: {
          characterId: +characterId,
        },
        data: {
          characterHealth: {
            decrement: equippedItem.itemHealth,
          },
          characterPower: {
            decrement: equippedItem.itemPower,
          },
        },
      });

      // 콜백 함수의 리턴값으로 갱신된 캐릭터 정보(updatedCharacter)를 반환합니다.
      return [updatedCharacter];
    });

    // 클라이언트에 전달할 캐릭터 스텟 객체를 생성합니다.
    const updatedCharacterStat = {
      health: updatedCharacter.characterHealth,
      power: updatedCharacter.characterPower,
    };

    // 아이템 탈착 성공 시, 해당 사실을 변경된 캐릭터 스텟과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '아이템 탈착 완료',
      updatedCharacterStat: updatedCharacterStat,
    });
  } catch (error) {
    console.error('아이템 탈착 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to unequip item',
    });
  }
});

/** 캐릭터가 돈 버는 API */
router.patch('/characters/:characterId/earnMoney', auth, async (req, res) => {
  try {
    // 돈 벌 '캐릭터'의 ID 값을 가져옵니다.
    const { characterId } = req.params;

    // characters 모델에서 characterId를 가지는 캐릭터 정보를 가져옵니다.
    const character = await prisma.characters.findUnique({
      where: {
        characterId: +characterId,
      },
    });

    // 만약 캐릭터가 존재하지 않거나 본인 캐릭터가 아닌 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!character) {
      return res
        .status(404)
        .json({ errorMessage: '존재하지 않는 캐릭터입니다.' });
    } else if (character.accountId !== req.account.accountId) {
      return res.status(403).json({
        errorMessage: '해당 캐릭터에 대한 접근 권한이 없습니다.',
      });
    }

    // 캐릭터의 소지금을 100만큼 증가시킵니다.
    const updatedCharacter = await prisma.characters.update({
      where: {
        characterId: +characterId,
      },
      data: {
        characterMoney: {
          increment: 100,
        },
      },
    });

    // 돈 벌기 성공 시, 해당 사실을 소지금과 함께 클라이언트에게 전달합니다.
    return res.status(200).json({
      message: '캐릭터 돈 벌기 완료',
      characterMoney: updatedCharacter.characterMoney,
    });
  } catch (error) {
    console.error('캐릭터 돈 벌기 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to earn money',
    });
  }
});

export default router;
