'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: '홍길동1',
        email: 'ho611611@hanmail.com',
        password: '1234', // 실제 프로젝트에서는 해시된 비밀번호를 사용해야 합니다.
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: '홍길동2',
        email: 'ho611612@hanmail.com',
        password: '1234', // 실제 프로젝트에서는 해시된 비밀번호를 사용해야 합니다.
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
