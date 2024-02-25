const router = require('express').Router();
const { User }= require('../../models');



router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        if(!allUsers){
            res.status(404).json({message: 'no users found'});
            return;
        }
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) =>{
    try {
        const userData = await User.create({
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
        });
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;