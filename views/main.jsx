var React = require('react');
var io = require('socket.io-client');


var socket = io();


var RTimer = React.createClass({
  getInitialState: function(){
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
      <h1 id="timer" className="timer-text">{this.state.time}</h1>
    );
  }
});


var RCurrentUsersCounter = React.createClass({
  getInitialState: function(){
    var self = this;
    socket.on('update-total-cons', function(data){
      self.setState({currentUsersCount: data});
    });
    return {currentUsersCount: 1}
  },
  render: function(){
    return (
      <div id="current-users">
        <h1 id="current-users-counter">Current Users: {this.state.currentUsersCount}</h1>
        <a href="#">Create Private Room</a>
      </div>
    );
  }
});


var RInfoText = React.createClass({
  render: function(){
    return (
      <div className="timer-text">
        Those who pomo together
        <br/><br/>
        <span id="wrong-text">stay together</span>
        <br/><br/>
        <div id="right-text">Are more productive !!!</div>
      </div>
    );
  }
});

var RDashboard = React.createClass({
  render: function(){
    return (
      <RCurrentUsersCounter />
    );
  }
});


var APP = React.createClass({
  render: function(){
    return (
      <div>
        <RTimer />
        <RInfoText />
        <RDashboard />
      </div>
    );
  }
});


React.render(
  <APP />,
  document.getElementById('container')
);
