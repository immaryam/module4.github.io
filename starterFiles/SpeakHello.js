
(function(value){
var helloSpeaker = {};
var speakWord = "Hello";

helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
};
value.helloSpeaker = helloSpeaker;
})(value);
