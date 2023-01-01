var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var d="";
router.get('/last.txt', function(req,res,next){
    res.send(String(d));
    d = new Date();
});

var timesvisited=0;
router.get('/color.html', function(req,res,next){
    timesvisited++;
    switch(timesvisited%4) {
      case 1:
        res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>color.html</title>
</head>

<body>
  <h1 style="color:red;">red</h1>
</body>

</html>`);
        break;
      case 2:
        res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>color.html</title>
</head>

<body>
  <h1 style="color:yellow;">yellow</h1>
</body>

</html>`);
        break;
      case 3:
        res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>color.html</title>
</head>

<body>
  <h1 style="color:green;">green</h1>
</body>

</html>`);
        break;
      case 0:
        res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>color.html</title>
</head>

<body>
  <h1 style="color:blue;">blue</h1>
</body>

</html>`);
        break;
}
});

var log="";
router.get('/log.html', function(req,res,next){
    var newtime;
    newtime = `<li>`+new Date()+`</li>`;
    log+=newtime;
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
  <title>color.html</title>
</head>

<body>
  <ul>`+log+`</ul>
</body>

</html>`);
});


var timesvisited2=0;
router.get('/color.txt', function(req,res,next){
    timesvisited2++;
    switch(timesvisited2%4) {
      case 1:
        res.send(`red`);
        break;
      case 2:
        res.send(`yellow`);
        break;
      case 3:
        res.send(`green`);
        break;
      case 0:
        res.send(`blue`);
        break;
    }
});


/*router.get('/log.json', function(req,res,next){
    res.json(String(new Date()));
});*/

var log2=[];
router.get('/log.json', function(req,res,next){
    var newtime;
    newtime = new Date();
    log2.push(String(newtime));
    res.json(log2);
});

router.get('/log-ro.json', function(req,res,next){
    res.json(log2);
});

router.get('/accept', function(req,res,next){
});

router.get('/content.ajax', function(req,res,next){

});

var images = [
    { uri:'photo-1539154444419-e31272d30a31.jpg', description:'medium-coated black-and-white dog near grass during daytime' },
    { uri:'photo-1553882809-a4f57e59501d.jpg',    description:'black and tan Belgian dog' },
    { uri:'photo-1554196721-b507d7e86ee9.jpg',    description:'gray dog standing on grass' },
    { uri:'photo-1555661059-7e755c1c3c1d.jpg',    description:'black dog behind plants' },
    { uri:'photo-1555991415-1b04a71f18c5.jpg',    description:'adult white Samoyed beside man and woman' },
    { uri:'photo-1558121591-b684092bb548.jpg',    description:'white and black dog lying on sofa' },
    { uri:'photo-1559440165-065646588e9a.jpg',    description:'person holding dog leash short-coat black and white dog' },
    { uri:'photo-1560160643-7c9c6cb07a8b.jpg',    description:'short-coated brown and white dog' },
    { uri:'photo-1562220058-1a0a019ab606.jpg',    description:'pet dog laying on sofa' },
    { uri:'photo-1565194481104-39d1ee1b8bcc.jpg', description:'short-coated gray dog' }
];

var imgcounter=0;
router.get('/images.json', function(req,res,next){
  res.json(images[imgcounter%images.length]);
  imgcounter++;
});

module.exports = router;