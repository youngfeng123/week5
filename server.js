let express = require('express');
let bodyParser = require('body-parser');
var db=[];


let app = express();

//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//Setup the static assets directories
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('views'));
app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/addNewTask', function (req, res) {
    res.render('addNewTask.html');
});

app.get('/listAllTask', function (req, res) {
    console.log("22222222222222222");
    res.render('listAllTask.html',{task: db});
});

app.post('/addNewTask', function (req, res) {
    db.push(req.body);
    res.render('addNewTask.html',{task: db});
    })





app.listen(8080);