const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/textbooks', (req, res) => {
    res.sendFile(__dirname + '/public/textbooks.html');
  })

  app.get('/games', (req, res) => {
    res.sendFile(__dirname + '/games.html');
  })

  app.get('/textbooks/a1', (req, res) => {
    res.sendFile(__dirname + '/public/textbooks/a1.html');
  })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port 3000`)
})
