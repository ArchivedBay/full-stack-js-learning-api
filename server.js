const express = require('express'); // node framework
const mongoose = require('mongoose') // for connecting with mongodb
const db = require('./config/keys').mongoURI // the link to your db on mlab
const bodyParser = require('body-parser');

// new express instance
const app = express();
const PORT = process.env.PORT || 5000;

// MODEL ROUTES
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB CONNECTION
mongoose.connect(db) // asynchronous
  .then( () => console.log('Successfully connected to MongoDB') )
  .catch( error => console.log(error) )

// BODY PARSER MIDDLEWARE, allows you to access 'req.body.<propertyName>'
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
// use routes: Basically when a user visits '/api/<resource>' we want to send them to the appropriate file.
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


// ROOT ROUTE
app.get('/', (req, res) => { // same as 'root to: "someController#someAction"' in ruby
  res.send('<h1>Waffles</h1>') // this is what gets sent as the response when you make a GET request to '/', this can be html.
});

// start the server listening on the given port
app.listen( PORT, () => console.log(`Server running on port: ${PORT}`) );

