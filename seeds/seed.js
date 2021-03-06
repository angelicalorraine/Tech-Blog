const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const postData = require('./post-seeds.json');
const userData = require('./user-seeds.json');
const commentData = require('./comment-seeds.json')




const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const comments = await Comment.bulkCreate(commentData);
  process.exit(0);
};


seedDatabase();