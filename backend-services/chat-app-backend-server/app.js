const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
var http 	= require('http').Server(express),
 io = require('socket.io')(http);


const app = express();
app.use(cors());

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var url = 'mongodb://localhost:27017/chat-app-services';
//var url = 'mongodb://admin:admin12345@ds117336.mlab.com:17336/model-tracker'
var connect = require('connect');
const port = process.env.PORT | 8080; // set our port


// DATABASE SETUP
const mongoose = require('mongoose');
mongoose.connect(url); // connect to our database
var uniqid = require('uniqid');

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("DB connection alive");
});

// Allow CORS support and remote requests to the service
app.use(function(req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

// Set up route
app.get('/', (req, res) =>
{
   res.json({ message: 'hello world' });
});


io.on('connection', (socket) => {
  
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'left'});   
  });
 
  socket.on('set-nickname', (nickname) => {
    socket.nickname = nickname;
    io.emit('users-changed', {user: nickname, event: 'joined'});    
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
  });
});

 
//==========================================================================


var User = require('./models/user');
var Message = require('./models/mesages');
var Exam = require('./models/exam');
var DataModel = require('./models/dataModel');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();



// create new user
router.post('/create/user', function (req, res, next) {
  console.log("req ", req)
    let user = User({
        name: req.body.name,
        userName: req.body.userName,
        Password: req.body.password,
        type: req.body.type
    })
    console.log(req.body);

    user.save(function (err, user) {
        if (err) {
            return res.status(500).send(err.name); //or next(err), res.sendStatus(500) etc 
            res.send(err);
        }
        res.json(user)
        console.log('exam created!', user);
    });
});

// login call
router.post('/login', function (req, res, next) {

    User.findOne({ "userName": req.body.userName }).then(user => {
        if (!user) {
            return res.status(401).json({
                success: false,
                error: "In Valid user"
            });
        }
        console.log('tis is the user', user)
        if (user.Password == req.body.password) {
            console.log('login success', user.Password)
            res.json(user)
        } else {
            return res.status(401).json({
                success: false,
                error: "failed"
            });
        }
    }).catch(error => {
        return next(error);
    })
})


app.use('/api', router)

// app.listen(port);
// console.log("Server is listining on port " + port)

app.listen(process.env.PORT || 5000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});