import express from 'express';
import { prisma } from '../utils/prisma/prisma_userClient.js';
import { prisma as prisma_gameData } from '../utils/prisma/prisma_gameDataClient.js';

const router = express.Router();

/** 아이템 등록(POST Method) API */
router.post('/items', async (req, res) => {
  try {
    // body에 필요한 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (
      !req.body.itemCode ||
      !req.body.itemName ||
      !req.body.itemStat ||
      !req.body.itemPrice
    ) {
      return res.status(400).json({
        errormessage:
          'Invalid request: itemCode, itemName, itemStat, itemPrice are required',
      });
    }

    // 클라이언트에게 전달받은 itemCode, itemName, itemStat, itemPrice 데이터를 변수에 저장합니다.
    const { itemCode, itemName, itemStat, itemPrice } = req.body;

    // items모델에 해당 itemCode를 가진 데이터를 찾습니다.
    const Item = await prisma_gameData.items.findUnique({
      where: {
        itemCode: +itemCode,
      },
    });

    // 만약 해당 아이템이 존재하는 경우, 해당 사실을 클라이언트에 전달합니다.
    if (Item) {
      return res
        .status(409)
        .json({ errorMessage: '이미 등록된 아이템 코드입니다.' });
    }

    const itemData = {
      itemCode: +itemCode,
      itemName,
      itemHealth: itemStat.health ?? 0,
      itemPower: itemStat.power ?? 0,
      itemPrice: +itemPrice,
    };

    // items모델에 새로운 '아이템'을 추가합니다.
    const item = await prisma_gameData.items.create({
      data: itemData,
    });

    // 아이템 등록 성공 시, 해당 사실을 등록한 아이템 정보와 함께 클라이언트에게 전달합니다.
    return res.status(201).json({
      message: '아이템 등록 완료!',
      item,
    });
  } catch (error) {
    console.error('아이템 등록 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to create item',
    });
  }
});

/** 아이템 수정(PATCH Method) API */
router.patch('/items/:itemCode', async (req, res) => {
  try {
    // 수정할 '아이템'의 ID 값을 가져옵니다.
    const { itemCode } = req.params;

    // body에 itemName, itemStat 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!req.body.itemName || !req.body.itemStat) {
      return res
        .status(400)
        .json({ errormessage: '입력된 데이터가 존재하지 않습니다' });
    }

    // 클라이언트에게 전달받은 itemName, itemStat 데이터를 변수에 저장합니다.
    const { itemName, itemStat } = req.body;

    // items모델에 해당 itemCode를 가진 데이터를 찾습니다.
    const item = await prisma_gameData.items.findUnique({
      where: { itemCode: +itemCode },
    });

    // 만약 해당 아이템이 존재하지 않는 경우, 해당 사실을 클라이언트에 전달합니다.
    if (!item) {
      return res
        .status(404)
        .json({
          errorMessage: `해당 아이템(ID: ${itemCode})은 존재하지 않습니다`,
        });
    }

    // 수정된 아이템 데이터를 저장합니다.
    const updatedData = {
      itemName: itemName || item.itemName,
      itemHealth: itemStat?.health ?? item.itemHealth,
      itemPower: itemStat?.power ?? item.itemPower,
    };

    // 아이템을 수정(update) 합니다.
    const updatedItem = await prisma_gameData.items.update({
      where: { itemCode: +itemCode },
      data: updatedData,
    });

    // 조정된 스텟을 저장합니다.
    const adjustingStat = {
      itemHealth: -item.itemHealth + updatedData.itemHealth,
      itemPower: -item.itemPower + updatedData.itemPower,
    }

    // 해당 아이템을 장착한 캐릭터 데이터들을 가져옵니다.
    const adjustTargetCharacters = await prisma.charactersEquipment.findMany({
      where:{
        itemCode: +itemCode
      }
    });

    // 해당 아이템을 장착한 캐릭터의 스텟을 수정합니다.
    if(adjustTargetCharacters.length > 0){
      for(let targetCharacter of adjustTargetCharacters){
        await prisma.characters.update({
          where:{
            characterId: targetCharacter.characterId
          },
          data:{
            characterHealth:{
              increment: adjustingStat.itemHealth
            },
            characterPower:{
              increment: adjustingStat.itemPower
            }
          }
        });
      }
      
    }

    // 아이템 수정 성공 시, 해당 사실을 수정된 아이템 정보화 함께 클라이언트에 전달합니다.
    return res.status(200).json({
      message: '아이템 수정 완료!',
      updatedItem: updatedItem,
    });
  } catch (error) {
    console.error('아이템 수정 오류 발생!', error);
    return res.status(500).json({
      message: 'Server error: Failed to modify item',
    });
  }
});

/** 아이템 목록 조회(GET Method) API */
router.get('/items', async (req, res) => {
  try {
    // items 모델을 사용해, DB에서 'itemCode'값이 낮은 순으로 정렬해 가져옵니다.
    const items = await prisma_gameData.items.findMany({
      select: {
        itemCode: true,
        itemName: true,
        itemPrice: true,
      },
      orderBy: {
        itemCode: 'asc',
      },
    });

    // 찾은'아이템'들을 클라이언트에 전달합니다.
    return res.status(200).json(items);
  } catch (error) {
    console.error('아이템 목록 조회 오류 발생!', error);
    return res.status(500).json({
      errormessage: 'Server error: Failed to get item_list',
    });
  }
});

/** 아이템 상세 조회(GET Method) API */
router.get('/items/:itemCode', async (req, res) => {
  try {
    // 조회할 '아이템'의 ID 값을 가져옵니다.
    const { itemCode } = req.params;

    // 상세 조회하려는 '아이템'을 가져옵니다.
    // 만약, 해당 ID값을 가진 '아이템'이 없다면, 없다는 사실을 클라이언트에게 전달합니다.
    const item = await prisma_gameData.items.findUnique({
      where: { itemCode: +itemCode },
    });
    if (!item) {
      return res
        .status(404)
        .json({
          errorMessage: `해당 아이템(ID: ${itemCode})은 존재하지 않습니다`,
        });
    }

    // 보이고자 하는 '아이템'정보를 필터링해 filterdItems에 저장합니다.
    const itemDetailInfo = {
      itemCode: item.itemCode,
      itemName: item.itemName,
      itemStat: {
        health: item.itemHealth,
        power: item.itemPower,
      },
      itemPrice: item.itemPrice,
    };

    // 조회 성공 시, 조회된'아이템'을 클라이언트에 전달합니다.
    return res.status(200).json(itemDetailInfo);
  } catch (error) {
    console.error('아이템 상세 조회 오류 발생!', error);
    return res.status(500).json({
      errormessage: 'Server error: Failed to get itemDetailInfo',
    });
  }
});

export default router;
