// Sequelize 라이브러리에서 Sequelize 클래스 Get
const { Sequelize } = require('sequelize');

// dotenv 패키지를 사용하여 .env 파일에 정의된 환경 변수를 로드.
require('dotenv').config();

// Sequelize 인스턴스를 생성하여 데이터베이스 연결을 설정
// process.env를 통해 환경 변수에서 데이터베이스 설정 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    // 데이터베이스 호스트 주소
    host: process.env.DB_HOST, 
    // 사용할 데이터베이스의 종류 (MySQL)
    dialect: 'mysql', 
});

// 생성한 Sequelize 인스턴스를 모듈로 내보냄
// 다른 파일에서 이 인스턴스를 불러와 데이터베이스와 상호작용할 수 있습니다.
module.exports = sequelize;
