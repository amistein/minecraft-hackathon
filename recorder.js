var events = require('events');
var teleport = require('teleport');
var utils = require('utils');
var yoonahbrow = utils.player('yoonahbrow');

console.log("S.P.I.C.E. TEAM YEAH!");
// var myBlockBreakListener = events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt ) {

// } );
// ...
// myBlockBreakListener.unregister();


var eventsArr = [];
var isRecording = false;
var speed = 100;

events.playerMove(function(evt){
  if(isRecording){
    eventsArr.push(evt);
  }
  // console.log(evt.player.name);
  // console.log(evt.from);
  // console.log(evt.to);

});

exports.startRecord = function(){
  if(isRecording){
    console.log("Already recording!");
  }
  eventsArr = [];
  isRecording = true;
}

var nextMove = function (arr, n, reverse){
    if(!reverse){
      if(n>=arr.length) return;
    }
    else{
      if(n < 0) return;
    }

    teleport(yoonahbrow, arr[n].from);

    setTimeout(function(){
      if(!reverse){
        nextMove(arr, n+1);
      }
      else{
        nextMove(arr, n-1, reverse);
      }
    }, speed);

};

exports.playback = function(newSpeed, reverse){
  if(!isRecording){
    speed = newSpeed;
    if(!reverse){
      nextMove(eventsArr, 0, reverse);
    }
    else{
      nextMove(eventsArr, eventsArr.length-1, reverse)
    }

  }
  else{
    console.log("Stop recording before playback");
  }
}

exports.stopRecord = function(){
  if(!isRecording){
    console.log("Already NOT recording!");
  }
  isRecording = false;
}

// exports.originalSpawn = function(){
//   teleport(yoonahbrow, eventsArr[0].from);
// }



//command r = to get the recorder started