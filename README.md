# hackathon
Thingy for documatics hackathon. 

I am very new to NPM packages so this is my first one!
I hope it is something useful/good! <!--Probably not-->

<!-- - I am not allowed to publish the package for the Hackathon
## How to install
Run this command
```
$ npm install @raadsel/smallify
```
-->

## How to use

You can use the `log()` or `print()` function as a replacement for console.log
```js
const log = require("@raadsel/smallify");

log("Hello world!")
//=> "Hello world!"
```

You can use the `str()` function to convert an object to a string
```js
const str = require("@raadsel/smallify");
const log = require("@raadsel/smallify");

const integer = 1
const inttostring = str(integer)
log(inttostring)
//=> 1
// but now it is an string!
```

You can use the `int()` function to convert an object to a integer!
```js
const int = require("@raadsel/smallify");
const log = require("@raadsel/smallify");

const string = "1"
const stringtoint = int(string)
log(stringtoint)
//=> 1
// but now it is an integer!
```

