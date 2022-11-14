function log(string) {console.log(string)}; //shorter console.log???

function print(string) {console.log(string)}; //alternative console.log

function str(string) {return string.toString()}; //converts object to string

function int(string) {return parseInt(string)}; //converts string to int


function sleep(time) { //sleep and continue after that. Usage: sleep(miliseconds) 
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > time){
      break;
    }
  }
}

function random(min=0, max=100) {return Math.floor(Math.random() * (max - min + 1)) + min;} //random number between min and max


//export functions for npm
module.exports = {
    log, //alternative console.log
    print, //alternative console.log
    str, //converts object to string
    int, //converts string to int
    sleep, //sleep and continue after that. Usage: sleep(miliseconds)
    random //random number between min and max
}
