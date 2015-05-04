var express = require('express');
var createRoom = require(__dirname + '/../views' + '/create-room');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


/* creating a private room */
/* (by chaining routs) */
router
  .get('/create-room', createRoom.getCreateRoomForm)
  .post('/create-room', createRoom.postCreateRoomForm);

module.exports = router;
