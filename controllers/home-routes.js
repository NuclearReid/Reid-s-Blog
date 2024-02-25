const router = require('express').Router();


router.get('/', (req, res) =>{
    try {
        res.render('home');

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

module.exports = router;