const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Post = sequelize.define('Post', {
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

Post.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Post, { foreignKey: 'user_id' });

module.exports = Post;
