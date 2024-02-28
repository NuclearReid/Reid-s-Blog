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





module.exports = router;