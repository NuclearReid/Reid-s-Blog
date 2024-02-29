const router = require('express').Router();
const { blogPost, User, Comment } = require('../../models');

router.post('/', async (req, res) =>{
    try {
        const addPost = await blogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(addPost);
    } catch (error) {
        res.status(500).json({message: 'unable to post to the database'});
    }
})


router.post('/comment', async (req, res) => {
    try {
        const addComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blogPost_id: req.body.blogPost_Id,
        });
        // console.log(addComment);
        res.status(200).json(addComment);
    } catch (error) {
         res.status(500).json(error);
         console.log(error);
    }
});


module.exports = router;