const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

const Comment = sequelize.define('Comment', {
  comment_id: {
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
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});

Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });
Post.hasMany(Comment, { foreignKey: 'post_id' });

module.exports = Comment;
