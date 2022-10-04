module.exports = function log(string) { //shorter console.log???
  console.log("string") 
};

module.exports = function print(string) { //alternative console.log
  console.log("string") 
};

module.exports = function str(string) { //converts object to string
  return string.toString()
};

module.exports = function int(string) { //converts string to int
  return parseInt(string)
};

module.exports = function print(string) { //converts string to int
  console.log("string") 
};

module.exports = function sleep(time) { //sleep and continue after that. Usage: sleep(miliseconds) 
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > time){
      break;
    }
  }
}
