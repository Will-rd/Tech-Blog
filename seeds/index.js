const sequelize = require('../config/connection');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const userSeedData = require('./user-seeds.json');
const postSeedData = require('./post-seeds.json');
const commentSeedData = require('./comment-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true
    })

    await Post.bulkCreate(postSeedData, {
        returning: true
    })

    await Comment.bulkCreate(commentSeedData, {
        returning: true
    })

    process.exit(0);
}

seedDatabase();