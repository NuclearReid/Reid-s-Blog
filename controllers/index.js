const router = require('express').Router();

const apiRoutes = require('./api');

// i dont think this is used here
// const blogRoutes = require('./api/blog-routes');

router.use('/api', apiRoutes);

module.exports = router;