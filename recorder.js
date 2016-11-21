var events = require('events');
console.log("S.P.I.C.E. TEAM YEAH!");
// var myBlockBreakListener = events.on( Packages.net.canarymod.hook.player.BlockDestroyHook, function( evt ) {

// } );
// ...
// myBlockBreakListener.unregister();


var eventsArr = [];
var isRecording = false;

events.playerMove(function(evt){
  if(isRecording){
    eventsArr.push(evt);
  }
  console.log(evt.player.name);

});

exports.startRecord = function(){
  isRecording = true;
}

exports.playback = function(){
  console.log("hi");
}

exports.stopRecord = function(){
  isRecording = false;
}
//command r = to get the recorder started