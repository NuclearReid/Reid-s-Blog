const router = require('express').Router();
const {blogPost, Comment, User} = require('../models');
const withAuth = require('../utils/auth');

// the home page
router.get('/', async (req, res) =>{
    try {
        const dbBlogPostData = await blogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['userName'],
                },
            ],
        });
        // serialize the posts
        const allPosts = dbBlogPostData.map((allPost) => allPost.get({plain: true}));
        console.log(req.session.logged_in)
        res.render('home',{
            allPosts,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.get('/blogpost/:id', async (req, res) => {
    try {
        // Find the blog post by its ID and include the associated user
        const dbBlogPostData = await blogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['userName'],
                },
            ],
        });

        // Finds all comments related to the blog post
        const dbCommentData = await Comment.findAll({
            where: { blogPost_id: req.params.id }, // Filter by the blog post ID
            include: [
                {
                    model: blogPost,
                    attributes: ['id'],
                },
            ],
        });

        // Map the comments to plain objects
        const selectComments = dbCommentData.map(comment => comment.get({ plain: true }));

        // Get the plain object for the blog post
        const selectBlog = dbBlogPostData.get({ plain: true });

        // Render the view with the blog post and associated comments
        res.render('comment', {
            ...selectBlog,
            comments: selectComments, // Pass the comments array to the view
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});



router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      }
      );
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', (req, res) =>{
    try {
        if(req.session.logged_in){
            res.redirect('/profile');
            return;
        }

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