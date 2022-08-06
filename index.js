/***********
 * REQUIRE *
 ***********/
const tasks = require('./routes/tasks');
const connection = require('./db');
// CORS is a browser security feature that restricts cross-origin HTTP requests
const cors = require('cors');
const express = require('express');
const app = express();

connection();

/*******
 * USE *
 *******/


//app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

app.use('/api/tasks', tasks);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));