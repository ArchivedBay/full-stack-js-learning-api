// not to be confused w/ users.js which only deals with authentication, this file deals with the user's profile information
// things like location, bio, experiences, education, etc.
const express = require('express');
const router = express.Router(); // replaces 'app.get' to be 'router.get'

// because we already set the initial route to be '/api/users' in server.js, 
// you can just deal with the last part here.

// @route   GET api/profile/profile
// @desc    Tests profile route
// @access  Private
router.get('/profile', (req, res) => res.json({
  message: "Profile route works"
}) );

module.exports = router; // in order for server.js to be able to pick it up.