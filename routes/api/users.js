//anything to do with authentication, login, email, password, passport, etc. could call this auth.js if you wanted.
const express = require('express');
const router = express.Router(); // replaces 'app.get' to be 'router.get'

// because we already set the initial route to be '/api/users' in server.js, 
// you can just deal with the last part here.

// @route   GET api/users/userList
// @desc    Tests users route
// @access  Public
router.get('/userList', (req, res) => res.json({
  message: "User's route works"
}) );

module.exports = router; // in order for server.js to be able to pick it up.