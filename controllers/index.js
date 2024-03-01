const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// renders the pages
router.use('/', homeRoutes);

// for my fetch requests
router.use('/api', apiRoutes);

module.exports = router;