// also has comments.
const express = require('express');
const router = express.Router(); // replaces 'app.get' to be 'router.get'

// because we already set the initial route to be '/api/users' in server.js, 
// you can just deal with the last part here.

// @route   GET api/posts/postList
// @desc    Tests post route
// @access  Public
router.get('/postList', (req, res) => res.json({
  message: "Posts route works"
}) );

module.exports = router; // in order for server.js to be able to pick it up.