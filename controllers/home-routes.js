const router = require('express').Router();
const {blogPost, Comment} = require('../models');


router.get('/', async (req, res) =>{
    try {
        const dbBlogPostData = await blogPost.findAll();
        
        const allPosts = dbBlogPostData.map((allPost) =>
            allPost.get({plain: true})
        );
        
        res.render('home',{
            allPosts,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.get('/login', (req, res) =>{
    try {
        res.render('login');
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/createAccount', (req, res) =>{
    try {
        res.render('createAccount');
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;