/***********
 * REQUIRE *
 ***********/
const connection = require('./db');
const tasks = require('./routes/tasks');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// CORS is a browser security feature that restricts cross-origin HTTP requests
const cors = require('cors');

connection();

/*******
 * USE *
 *******/

//app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

app.use('/api/tasks', tasks);

app.listen(port, ()=> console.log(`Listening on ${port}`));