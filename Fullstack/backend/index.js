const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectToMongo = require('./db');

connectToMongo(); //function imported from db.js to connect with database

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

//Avaiable Routes 
app.use('/api/auth',require('./routes/auth'))  //auth.js - Create New User and Login
app.use('/api/likedsongs',require('./routes/songs')) //notes.js - All notes access of loggedin used

app.listen(port, () => {
  console.log(`MusixOn Backend listening on port http://localhost:${port}`)
})
