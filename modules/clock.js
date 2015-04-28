var util = require('util');
var EventEmitter = require('events').EventEmitter;

var pomoTimes = [25, 5, 15];
var currentCountDown = null;
var currentIndex = 0;


function getCountDown(){
    var time = pomoTimes[currentIndex % pomoTimes.length];
    currentIndex += 1;
    return time;
}



function Clock (){};
util.inherits(Clock, EventEmitter);

Clock.prototype.run = function(){
    var self = this;
    setInterval(function(){
        if (currentCountDown <= 0){
            currentCountDown = getCountDown();
        };

        // console.log('New server tick. Time: ', currentCountDown);
        currentCountDown = currentCountDown - (1/60);
        self.emit('tick', currentCountDown);
    }, 1000);
}

var clock = new Clock();

module.exports = clock;
