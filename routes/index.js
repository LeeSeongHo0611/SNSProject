const express = require('express');
const router = express.Router();
const User = require('../models/User');

// 라우터에서 데이터를 가져와 EJS 템플릿으로 렌더링
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.render('index', { users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 로그인 페이지를 렌더링합니다.
router.get('/login', (req, res) => {
    res.render('login');
  });

module.exports = router;
