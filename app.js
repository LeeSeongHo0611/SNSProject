const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
require('./models/User'); // 모델을 로드합니다

// .env 파일의 환경 변수를 로드합니다.
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 뷰 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// 데이터베이스 연결 확인 및 동기화
sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// 라우터 설정
app.use('/', require('./routes/index'));

// 포트 설정 및 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
