var React = require('react');
var io = require('socket.io-client');

var RTimer = React.createClass({
  getInitialState: function(){
    var socket = io();
    var self = this;
    socket.on('time-tick', function(data){
      var seconds = Math.round( (data % 1) * 60);
      var minutes = Math.floor(data);
      self.setState({
        time: (minutes <= 9 ? "0" + minutes : minutes)  +
          ':' + (seconds <= 9 ? "0" + seconds : seconds)
      });
    });

    return {time: "Loading timer.."}
  },
  render: function(){
    return (
      <h1 idName="timer" className="timer-text">{this.state.time}</h1>
    );
  }
});

React.render(
  <RTimer />,
  document.getElementById('timer')
);
