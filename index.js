module.exports = function log(string) { //shorter console.log???
  console.log("string") 
};

module.exports = function str(string) { //converts object to string
  return string.toString()
};

module.exports = function int(string) { //converts string to int
  return parseInt(string)
};
