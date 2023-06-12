const router = require('express').Router();
const { Post } = require('../../../models');



router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: [
                'id',
                'user_id',
                'post_title',
                'post_content'
            ]
        });
        console.log(postData);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/new-post', async (req, res) => {
    const { user_id:UserIdInput, post_title:PostTitleInput, post_content:PostContentInput } = req.body;
    const newPostData = await Post.create({
        user_id:UserIdInput,
        post_title:PostTitleInput,
        post_content:PostContentInput
    });

    res.json(newPostData);
})


module.exports = router;