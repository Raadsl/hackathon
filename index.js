//Made by Raadsel aka Jorik.
function log(object) {console.log(object)}; //shorter console.log???

function print(object) {console.log(object)}; //alternative console.log

function str(object) {return object.toString()}; //converts object to string

function int(object) {return parseInt(object)}; //converts object to int

function float(object) {return parseFloat(object)}; //converts object to float

function ev(string) {eval(string)} //shorter eval()

function sleep(miliseconds) { //sleep and continue after that. Usage: sleep(miliseconds) 
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > miliseconds){
      break;
    }
  }
}

function clear() {console.clear()} // clears console

function random(min=0, max=100) {return Math.floor(Math.random() * (max - min + 1)) + min;} //random number between min and max\

function randomColor() {return '#' + Math.floor(Math.random() * 16777215).toString(16);} //random color

function randomColorRGB() {return 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';} //random color rgb

function randomColorRGBA() {return 'rgba(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 100) + ')';} //random color rgba

function round(number, decimals=0) {return Number(Math.round(number+'e'+decimals)+'e-'+decimals)} //rounds number to decimals

function getenv(envir) {
  return process.env[envir];
}

function setenv(envir, value) {
  process.env[envir] = value;
}

function allenvs() {
  return process.env;
}

//export functions for npm
module.exports = {
    log, //alternative console.log
    print, //alternative console.log
    clear, //shorter console.clear. Clears console
    str, //converts object to string
    int, //converts object to int
    float, //converts object to float
    sleep, //sleep and continue after that. Usage: sleep(miliseconds)
    random, //random number between min and max
    randomColor, //random color
    randomColorRGB, //random color rgb
    randomColorRGBA, //random color rgba
    round, //rounds number to decimals
    ev, // shorter eval
    getenv, //get environment variable ; alternative to process.env[env]
    setenv, //set environment variable ; alternative to process.env[env] = value
    allenvs //get all environment variables
}
