//anything to do with authentication, login, email, password, passport, etc. could call this auth.js if you wanted.
const express = require('express');
const router = express.Router();            // replaces 'app.get' to be 'router.get'
const User = require('../../models/User');  // User model
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

// because we already set the initial route to be '/api/users' in server.js, 
// you can just deal with the last part here.

// @route   GET api/users/userList
// @desc    Tests users route
// @access  Public
router.get('/userList', (req, res) => {
  User.find()
    .then( userList => res.json(userList) )
    .catch( error => console.log(error) );
})


// @route   POST api/users/register
// @desc    Register the user
// @access  Public
router.post('/register', (req, res) => {
  //first check if the user already exists.
  User.findOne({ email: req.body.email }) //based on the input name
    .then(user => {
      if(user) return res.status(400).json({ email: 'Email already exists' }); //immediately stop & return an error
         
      // gravatar settings
      const avatar = gravatar.url(req.body.email, {
        s: 200,   
        r: 'pg',  
        d: 'mm'   
      })
      
      // make a new User record / item
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      }); 

      // hash their password & save them to the db.
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if(error) throw error;

          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user) ) // return the user back as a response out of this entire http request.
            .catch(error => console.log(error));
        })
      })
      
    })
    .catch(error => console.log(error));
});


module.exports = router; // in order for server.js to be able to pick it up.