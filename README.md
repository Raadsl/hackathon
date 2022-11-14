# hackathon
Thingy for documatics hackathon. 

I am very new to NPM packages so this is my first one!
I hope it is something useful/good! <!--Probably not-->


## How to install
Run this command
```
$ npm install @raadsel/smallify
```


## How to use

You can use the `log()` or `print()` function as a replacement for console.log
```js
const { log } = require("@raadsel/smallify");

log("Hello world!")
//=> "Hello world!"
```

You can use the `str()` function to convert an object to a string
```js
const { str, log} = require("@raadsel/smallify");


const integer = 1
const inttostring = str(integer)
log(inttostring)
//=> 1
// but now it is an string!
```

You can use the `int()` function to convert an object to a integer!
```js
const { int, log} = require("@raadsel/smallify");


const string = "1"
const stringtoint = int(string)
log(stringtoint)
//=> 1
// but now it is an integer!
```

You can use the `random(num1, num2)` function to get a random nummer between 2 inputted values. By default it's 0,100 
Example:
```js
const { print, random } = require("@raadsel/smallify");
print(random())
//=> random number between 0 and 100

//or like this
print(random(0,5))
//=> random number between 0 and 5
```

That's it, simple but <!-- I hope -->powerful! 
