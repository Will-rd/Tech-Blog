const router = require('express').Router();
const { Comment } = require('../../../models');



router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            attributes: [
                'id',
                'user_id',
                'post_id',
                'comment_content'
            ]
        });
        console.log(commentData);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/new-comment', async (req, res) => {
    const { user_id:UserIdInput, post_id:PostIdInput, comment_content:CommentContentInput } = req.body;
    const newCommentData = await Comment.create({
        user_id:UserIdInput,
        post_id:PostIdInput,
        comment_content:CommentContentInput
    });

    res.json(newCommentData);
})


module.exports = router;