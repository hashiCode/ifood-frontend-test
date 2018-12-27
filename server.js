const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 8888;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', port);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname +'/build/index.html'));
// });

const server = http.createServer(app);
server.listen(port, () =>{
    console.log(`Server startup on port ${port}`)
});