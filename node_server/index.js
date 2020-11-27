var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require("body-parser")
const checkAccount = require("../test") // node 没法用import

app.use(cors())
app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({extended: false}));

app.post('/login', async (req, res) => {
  console.log("login area");
  console.log(req.body);
  // console.log();
  // console.log(checkAccount);
  console.log("res");
  // console.log(checkAccount(req.body.email, req.body.password))
  checkAccount(req.body.email, req.body.password).then( (result) => {
    console.log("result!!!")
    console.log(result);
    res.send(result);
  })
});

io.on('connection', (socket) => {
  // console.log(socket);
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // io.emit('chat message', "from ip <" + socket.handshake.address + ">: "+ msg);
    io.emit('chat message', ": "+ msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(8000, () => {
  console.log('listening on *:3000');
  console.log(__dirname);
});