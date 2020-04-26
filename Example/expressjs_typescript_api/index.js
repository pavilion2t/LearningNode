const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.status(200).send('hello world! our server is running')
});

server.listen(3000);