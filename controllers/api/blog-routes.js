const router = require('express').Router();
const { blogPost } = require('../../models');


router.get('/', async (req, res)=>{
    try {
        const allPosts = await blogPost.findAll();
        if(!allPosts){
            res.status(404).json({message:'no posts found'});
            return;
        }
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) =>{
    try {
        const addPost = await blogPost.create(req.body);
        res.status(200).json(addPost);
    } catch (error) {
        res.status(500).json({message: 'unable to post to the database'});
    }
})



module.exports = router;