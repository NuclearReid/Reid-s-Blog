const router = require('express').Router();
const { blogPost, User, Comment } = require('../../models');

// this is being called by public/js/newPost.js
// basically gets the info from the text boxes, makes it a json
// and sends it to this .post
router.post('/', async (req, res) =>{
    try {
        // creates a blogPost and assignes the user_id of the post to the
        // current session's user_id
        const addPost = await blogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(addPost);
    } catch (error) {
        res.status(500).json({message: 'unable to post to the database'});
    }
})

// this is called by public/js/comment.js
// basically works the same but i'm having trouble with it
// req.session.user_id is correct but something's up in the html
router.post('/comment', async (req, res) => {
    try {
        console.log(req.session.user_id);
        const addComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            blogPost_id: req.body.blogPost_Id,
        });
        res.status(200).json(addComment);
    } catch (error) {
         res.status(500).json(error);
         console.log(error);
    }
});


module.exports = router;