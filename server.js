const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 8888;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/build/index.html'));
});

app.listen(port, () =>{
    console.log(`Server startup on port ${port}`)
});