(function(value){
  
var byeSpeaker = {};
var speakWord = "Good Bye";

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};

 value.byeSpeaker = byeSpeaker;
  })(value);
