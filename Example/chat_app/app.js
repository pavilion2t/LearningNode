const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('index');
});

app.set('view engine', 'ejs')

app.use(express.static('public'))

server = app.listen(3000);

const io = require("socket.io")(server);

io.on('connection', (socket) => {
	console.log('有人上线啦')

	//默认名字
	socket.username = "匿名"

    //监听名字更改
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //监听新消息
    socket.on('new_message', (data) => {
        //广播新消息
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //监听是否在打字
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})
