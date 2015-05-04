module.exports = {
  getCreateRoomForm: function(req, res){
    res.render('create-room');
  },
  postCreateRoomForm: function(req, res){
    res.redirect('/');
  }
}
