import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../utils/prisma/prisma_userClient.js';
import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const router = express.Router();

/** 사용자 회원가입 API **/
router.post('/sign-up', async (req, res, next) => {
  try {
    // body에 필요한 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (
      !req.body.accountId ||
      !req.body.accountPassword ||
      !req.body.accountPasswordCheck ||
      !req.body.accountName
    ) {
      return res.status(400).json({
        errormessage:
          'Invalid request: accountId, accountPassword, accountPasswordCheck, accountName are required',
      });
    }

    // 요청받은 데이터 accountId, accountPassword, accountPasswordCheck, accountName를 저장합니다.
    const { accountId, accountPassword, accountPasswordCheck, accountName } =
      req.body;

    // 해당 계정 id와 일치하는 계정 id가 있는지 DB에서 찾아봅니다.
    const isExistUser = await prisma.accounts.findFirst({
      where: {
        accountId,
      },
    });

    // 만약 일치하는 계정 id가 이미 존재한다면, 해당 사실을 클라이언트에 전달합니다.
    if (isExistUser) {
      return res.status(409).json({ message: '이미 존재하는 계정입니다.' });
    }

    // 만약 비밀번호 확인이 제대로 이루어지지 않았다면, 해당 사실을 클라이언트에 전달합니다.
    if (accountPassword !== accountPasswordCheck) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 유효성 체크를 위한 스키마를 생성합니다.
    const schema = Joi.object().keys({
      id: Joi.string()
        .pattern(new RegExp('^[a-z]+[0-9]+$'))
        .min(3)
        .max(20)
        .required(),
      password: Joi.string().min(6).required(),
    });

    // 만약 유효하지않은 계정 ID 또는 비밀번호라면, 해당 사실을 클라이언트에 전달합니다.
    const { error } = schema.validate({
      id: accountId,
      password: accountPassword,
    });
    if (error) {
      return res
        .status(400)
        .json({ message: '아이디 또는 비밀번호가 조건에 맞지 않습니다.' });
    }

    // 사용자 비밀번호를 암호화합니다.
    const hashedPassword = await bcrypt.hash(accountPassword, 10);

    const account = await prisma.accounts.create({
      data: {
        accountId,
        accountPassword: hashedPassword, // 암호화된 비밀번호를 저장합니다.
        accountName,
      },
    });

    // 회원가입을 성공적으로 수행했다면, 해당 사실과 함께 계정 id와 계정 이름을 반환합니다.
    return res.status(201).json({
      message: '회원가입이 완료되었습니다.',
      ID: account.accountId,
      name: account.accountName,
    });
  } catch (err) {
    // 오류 발생 시, 오류 핸들러 미들웨어로 이동합니다.
    next(err);
  }
});

// /** 로그인 API **/
router.post('/sign-in', async (req, res, next) => {
  try {
    // body에 필요한 데이터가 존재하지 않는다면, 해당 사실을 클라이언트에 전달합니다.
    if (!req.body.accountId || !req.body.accountPassword) {
      return res.status(400).json({
        errormessage:
          'Invalid request: accountId, accountPassword are required',
      });
    }

    // 요청받은 데이터 accountId, accountPassword를 저장합니다.
    const { accountId, accountPassword } = req.body;

    // 해당 계정 id와 일치하는 계정 id가 있는지 DB에서 찾아봅니다.
    const account = await prisma.accounts.findFirst({
      where: { accountId },
    });

    // 해당 계정id가 DB에 존재하지 않는 계정id라면, 해당 사실을 알립니다.
    if (!account)
      return res.status(401).json({ message: '존재하지 않는 계정입니다.' });
    // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
    else if (!(await bcrypt.compare(accountPassword, account.accountPassword)))
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

    // 로그인에 성공하면, 사용자의 accountId를 바탕으로 JWT토큰을 생성합니다.
    let token = jwt.sign(
      {
        type: 'JWT',
        accountId: accountId,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '15m', // 15분후 만료
      }
    );

    // 로그인을 성공적으로 수행했다면, 해당 사실과 함께 계정Id와 JWT토큰을 반환합니다.
    return res.status(200).json({
      message: '로그인 성공',
      accountId,
      token: `Bearer ${token}`,
    });
  } catch (err) {
    console.err('로그인에 오류 발생!');
    return res.status(500).json('Server Error: 500');
  }
});

export default router;
