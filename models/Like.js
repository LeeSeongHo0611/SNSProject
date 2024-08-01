const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

const Like = sequelize.define('Like', {
  like_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'post_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'user_id'
    }
  }
}, {
  timestamps: true
});

Like.belongsTo(User, { foreignKey: 'user_id' });
Like.belongsTo(Post, { foreignKey: 'post_id' });
User.hasMany(Like, { foreignKey: 'user_id' });
Post.hasMany(Like, { foreignKey: 'post_id' });

module.exports = Like;
