const router = require('express').Router();
const { User }= require('../../models');

// end route is /api/users

// this is just here to be used with insomnia to take a look at the users easily
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

// used to create a new user, take a look at /public/j/signUp
router.post('/', async (req, res) =>{
    try {
      // uses the data sent to it to create a new user
        const userData = await User.create(req.body);
        // keeps the person logged in after their account is created
        // I thought about making a 'stay logged in' checkbox and if that's ticked then this is executed
       
        // I'm not totally sure where .save() is coming from, i'm trying to figure it out lol
        // I think it comes with express-session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
        // res.render('profile');

    } catch (error) {
        res.status(500).json(error);
    }
});

// used for when a person is logging in.
// uses public/js/login.js
router.post('/login', async (req, res) => {
    try {
      // finds the user in the database with the email that is sent in fetch POST
      const userData = await User.findOne({ where: { email: req.body.email } });
      
      // if no user found, sends a note.
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      // checks if the password matches the email, .checkPassword() is in the User model
      const validPassword = await userData.checkPassword(req.body.password);
      // if they didn't type in the correct password, sends the same notice as if they put in the wrong email
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // sets the session.user_id to the id of the person logged in
      // all sets the session.logged_in to be true;
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // when they click logout, sends this POST and destroyes the session
  // without the session destroyed, they're logged out
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;