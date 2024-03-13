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
// delete a blog post
router.delete('/:id', async (req, res) => {
    try {
        const blogData = await blogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if(!blogData){
            res.status(404).json({message: 'no blog post found to delete'});
            return;
        }
        res.status(200).json({message: 'comment deleted'});
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete a comment
router.delete('/comment/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });
        if(!commentData){
            res.status(404).json({message: 'no comment found to delete'});
            return;
        }
        res.status(200).json({message: 'comment deleted'});
    } catch (error) {
        res.status(500).json(error);
    }
});

// change a blog post
router.put('/updatePost/:id', async (req, res) => {
    try {

        const post = await blogPost.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const { title, content } = req.body;

        post.title = title;
        post.content = content;

        await post.save();

        res.status(200).json({ message: 'Post updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// change a comment
router.put('/updateComment/:id', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        if(!comment){
            return res.status(404).json({message: 'comment not found'});
        }
        const {content} = req.body;
        console.log(req.body);
        comment.commentPost = content;
        await comment.save();
        res.status(200).json({message: 'updated the comment!'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});


module.exports = router;