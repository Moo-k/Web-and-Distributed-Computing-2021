var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


router.get('/brew', function(req,res){
    if (req.query.drink == `tea`){
        res.send("A delicious cup of tea!");
    }   else if (req.query.drink == `coffee`){
        res.sendStatus(418);
    }   else {
        res.sendStatus(400);
    }
});

var messages=[];
messages.push("first");
var lastmessage = 0;
router.post('/pass-it-on', function(req,res){
    if (`message` in req.body){
        messages.push(req.body.message);
        res.send(messages[messages.length-2]);
    }   else {
        res.sendStatus(400);
    }
});

var string = "";
router.post('/combine',function(req,res){
   for (line in req.body.lines){
       string += req.body.lines[line] + req.body.suffix + "\n";
   }
   res.send(string);
});

var val = 1;
router.get('/cookie',function(req,res){
    res.cookie('task3_1',val++);
    res.send();
})