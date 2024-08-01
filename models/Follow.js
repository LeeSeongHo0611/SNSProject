const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Follow = sequelize.define('Follow', {
  follow_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  follower_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  following_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    }
  }
}, {
  timestamps: true
});

Follow.belongsTo(User, { as: 'Follower', foreignKey: 'follower_id' });
Follow.belongsTo(User, { as: 'Following', foreignKey: 'following_id' });
User.hasMany(Follow, { as: 'Followers', foreignKey: 'following_id' });
User.hasMany(Follow, { as: 'Followings', foreignKey: 'follower_id' });

module.exports = Follow;
