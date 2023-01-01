var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req,res,next) {
  res.send('respond with a resource');
});

router.use('/addpost', function(req,res,next){
    console.log("POST from a user");
    next();
});

module.exports = router;

var posts = [];
router.post('/addpost', function(req,res,next) {
    var title = req.body.title;
    var content = req.body.content;
    posts.push({"title":title, "content":content});
    res.send();
});

var reversedposts = [];
router.get('/getposts',function(req,res,next){
    for (var i=(posts.length)-1;i>=0;i--){
        reversedposts.push(posts[i]);
    }
    res.send(JSON.stringify(reversedposts));
});

