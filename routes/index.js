var express = require('express');
var createRoom = require(__dirname + '/../views' + '/create-room');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* GET private room */
router.get('/create-room', createRoom);

module.exports = router;
