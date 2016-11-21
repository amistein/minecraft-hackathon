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
  console.log(evt.player.name);
  console.log(evt.from);
  console.log(evt.to);

});

exports.startRecord = function(){
  if(isRecording){
    console.log("Already recording!");
  }
  eventsArr = [];
  isRecording = true;
}

var nextMove = function (arr, n){
    if(n>=arr.length) return;

    teleport(yoonahbrow, arr[n].from);

    setTimeout(function(){
      nextMove(arr, n+1);
    }, speed);
};

exports.playback = function(newSpeed){
  if(!isRecording){
    speed = newSpeed;
    nextMove(eventsArr, 0);
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