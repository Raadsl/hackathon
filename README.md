# Smallify
Originally made for [documatics](https://www.documatic.com/) hackathon. 


## Actual content:
I am very new to NPM packages so this is my first one!
I hope it is something useful/good! <!--Probably not-->




## How to install
Run this command
```
$ npm install @raadsel/smallify
```


## How to use

You can import all the short functions adding this line:
```js
const { log, print, clear, int, float, sleep, random, randomColor, randomColorRGB, round, ev, getenv, setenv } = require("@raadsel/smallify");
```

<details>
  <summary>All the functions:</summary>
    Click on the name of the function below to see a more detailed explanation.
</details>

- [log](#print), => alternative console.log
- [print](#print), => alternative console.log
- [clear](#print), => shorter console.clear. Clears console
- [str](#str), => converts object to string
- [int](#float), => converts object to int
- [float](#float), => converts object to float
- [sleep](#ev), => sleep and continue after that. Usage: sleep(miliseconds)
- [random](#random), => random number between min and max
- [randomColor](#random), => Gets a random Hex color
- [randomColorRGB](#random), => Gets a random RGB color
- [randomColorRGBA](#random), => Gets a random RGBA color
- [round](#round), => Rounds number to decimals
- [ev](#ev), => shorter eval
- [getenv](#getenv), => alternative to process.env.SECRET. Gets the environment variable
- [setenv](#getenv), => set environment variable ; alternative to process.env[env] = value
- [allenvs](#getenv), => get all environment variables

--------
### Now the more detailed explanation

<div id='print' /><br>

You can use the `log()` or `print()` function as a replacement for `console.log()`. And the `clear()` function as a replacement for `console.clear()` \
Example:
```js
const { log, print, clear } = require("@raadsel/smallify");

log("Hello world!")
//=> Hello world!

print("Hello NPM!")
//=> Hello NPM!

//to clear the console
clear()
```

<div id="str" /><br>

You can use the `str()` function to convert an object to a string \
Example:
```js
const { str, log} = require("@raadsel/smallify");


const integer = 1
const inttostring = str(integer)
log(inttostring)
//=> 1
// but now it is an string!
```

<div id="float" /><br>

You can use the `int()` function to convert an object to a integer! \
Or use the `float()` function to convert an object to a float! \
Example:
```js
const { int, float, log} = require("@raadsel/smallify");

const string1 = "1"
const string2 = "2"
const float1 = "1.9"
const float2 = "1.1"

log(int(string1)+int(string2))
//=> 3

log(float(float1)+float(float2))
//=> 3

//this won't work if its a string
log(string1+string2)
```
<div id="random" /><br>

You can use the `random(num1, num2)` function to get a random nummer between 2 inputted values. By default it's 0,100 \
Example:
```js
const { print, random } = require("@raadsel/smallify");
print(random())
//=> random number between 0 and 100

//or like this
print(random(0,5))
//=> random number between 0 and 5
```

Now for the random colors: \
There are 3 random colors functions: `randomColor()` (returns a random hex color), `randomColorRGB()` (returns a random RGB color) and `randomColorRGBA()` (returns a random RGBA color).  \
Usage: <br>
```js
const { print, randomColor, randomColorRGB, randomColorRGBA } = require("@raadsel/smallify");

print(randomColor())
//=> #387687
// (random hex)

print(randomColorRGB())
//=> rgb(213,187,1)
// (random RGB)

print(randomColorRGBA())
//=> rgba(60,93,176,72)
// (random RGBA)
```

<div id="round" /><br>

The `round()` function rounds a number to a decimal. \
Usage: \
```js
round(1.23456789, 3) 
//=> 1.235
``` 
<br>

<div id="ev" /><br>

You can use `ev()` as shorter/replacement for `eval()`. And the `sleep()` function pauzes the code for a specific time. Kinda like the python `time.sleep()` function. \
Example: 
```js
const { clear, log, sleep} = require("@raadsel/smallify");

ev("log('SPAM\nSPAM\nSPAM\nSPAM\nSPAM\nSPAMSPAMSPAM')")
//=> a lot of spam in the console

//using sleep() to not instantly clear the console so you can still see it
sleep(1000)

clear()
//=> 
//console is cleared
```

<div id='getenv'/><br>

The `getenv("ENV")` version is an shorter version of `process.env.[ENV]`, and the `setenv("FOO", "BAR")` is a shorter function of `procces.env.[ENV] = value]` \
Usage example:<br> 

.env file:
```
FOO=bar
```
index file:
```js
const { log, getenv} = require("@raadsel/smallify");

log(getenv("FOO"))
//=> BAR
```
## or \
.env file:
```

```
index file:
```js
const { log, getenv, setenv} = require("@raadsel/smallify");

setenv("FOO", "BAR")

log(getenv("FOO"))
//=> BAR
```

There's also the `getenvs()` function which gives ALL the envs there are


**That's it, simple but powerful!** <!-- I hope so.... -->
