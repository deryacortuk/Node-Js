# Node.js  File System Module
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the  `require()`  method:

>     var  fs = require('fs');
>     const fs = require('fs') 
>     fs.writeFileSync('files.json', 'Javascript')

The script above uses require to load in the fs module. This is a built-in Node.js module that provides functions you can use to manipulate the file system. The script uses writeFileSync to write a message to files.json

-   `fs.access()`: check if the file exists and Node.js can access it with its permissions
-   `fs.appendFile()`: append data to a file. If the file does not exist, it's created
-   `fs.chmod()`: change the permissions of a file specified by the filename passed. Related:  `fs.lchmod()`,  `fs.fchmod()`
-   `fs.chown()`: change the owner and group of a file specified by the filename passed. Related:  `fs.fchown()`,  `fs.lchown()`
-   `fs.close()`: close a file descriptor
-   `fs.copyFile()`: copies a file
-   `fs.createReadStream()`: create a readable file stream
-   `fs.createWriteStream()`: create a writable file stream
-   `fs.link()`: create a new hard link to a file
-   `fs.mkdir()`: create a new folder
-   `fs.mkdtemp()`: create a temporary directory
-   `fs.open()`: set the file mode
-   `fs.readdir()`: read the contents of a directory
-   `fs.readFile()`: read the content of a file. Related:  `fs.read()`
-   `fs.readlink()`: read the value of a symbolic link
-   `fs.realpath()`: resolve relative file path pointers (`.`,  `..`) to the full path
-   `fs.rename()`: rename a file or folder
-   `fs.rmdir()`: remove a folder
-   `fs.stat()`: returns the status of the file identified by the filename passed. Related:  `fs.fstat()`,  `fs.lstat()`
-   `fs.symlink()`: create a new symbolic link to a file
-   `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related:  `fs.ftruncate()`
-   `fs.unlink()`: remove a file or a symbolic link
-   `fs.unwatchFile()`: stop watching for changes on a file
-   `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related:  `fs.futimes()`
-   `fs.watchFile()`: start watching for changes on a file. Related:  `fs.watch()`
-   `fs.writeFile()`: write data to a file. Related:  `fs.write()`

One peculiar thing about the  `fs`  module is that all the methods are asynchronous by default, but they can also work synchronously by appending  `Sync`.

For example:

-   `fs.rename()`
-   `fs.renameSync()`
-   `fs.write()`
-   `fs.writeSync()`



## Chalk
![enter image description here](https://cdn.jsdelivr.net/gh/chalk/ansi-styles@8261697c95bf34b6c7767e2cbe9941a851d59385/screenshot.svg)

There are npm modules for pretty much anything you can want to do with Node.js. Chalk comes with an easy to use composable API where you just chain and nest the styles you want.
#**

## Install

    $ npm install chalk

## [](https://www.npmjs.com/package/chalk#usage)Usage

    const  chalk  =  require('chalk');
    
    console.log(chalk.blue('Hello world!'));

[npm : Chalk ](https://www.npmjs.com/package/chalk#install)

## npm Modules and nodemon

 You can use npm modules from outside of your scripts by installing them globally. Globally installed modules are designed to be used from the terminal and provide you with new commands you can run. 
 npm modules can be installed globally by adding a  -g  flag to the installation command. Not all modules are designed to be installed globally, so be sure to refer to the module documentation to learn how it’s supposed to be used. 

     npm install -g nodemon

    npm install -g nodemon@1.19.4
    
    npm install --save-dev nodemon
A globally installed module is not added as a dependency to your project. That means you won’t see it listed in package.json or package-lock.json. You also will not  find its code in node_modules. Globally installed modules are located in a special directory in your machine which is created and managed by npm. When you install nodemon globally, you get access a new nodemon command from the terminal. This can be used to start and Node.js application and then restart the application any of the app scripts change. This means you will not need to switch between the terminal and text editor to restart your application every time you make a change. The command below runs app.js through nodemon. 

> nodemon app.js

P.S. You can stop nodemon by using ctrl + c from the terminal! 

# Request - Simplified HTTP client
![enter image description here](https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true)

There are several libraries that make it easy to fire off HTTP requests. . You can install it using the command below. 

> npm i request

Before you use the library in your app, you will need to figure out which URL you’re trying to fetch. To fetch real-time weather data, you will need to sign up for a free Dark Sky API account. 
[Dark Sky API](https://darksky.net/dev)

    const request = require('request')  
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,122.4233' 
     
    request({ url, json: true }, (err, res) => { console.log(res.body.daily.data[0].summary + ' It is currently ' + res.body.currently.temperature + ' degrees out. There is a ' + res.body.currently.precipProbability + '% chance of rain.') })

## Handling Errors
There are plenty of reasons an HTTP request can fail. Maybe your machine does not  have an internet connection, or maybe the URL is incorrect. Handling errors is important.

>  

## The Callback Function

 A callback function is a function that is passed as an argument to another function.If we want to execute a function right after the return of some other function, then callbacks can be used.
 Callback functions can be used to abstract complex asynchronous code into a simple reusable function.
 ```javascript
function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 7000 );
}

function second(){
  console.log(2);
}

first();
second();
```

## ES6 : Object Property Shorthand and Destructuring
***Property Shorthand*** 
The property shorthand makes it easier to define properties when creating a new object. It provides a shortcut for defining a property whose value comes from a variable of the same name. 

> const name = 'Alex' 
>  const age = 30  
>  const user = {    
>    name: name, 
> age: age,       
>  location: 'London'
>   }
>   
> // ***Property Shorthand***
> 
> const name = 'Alex' 
>  const age = 30   
>  const user = {  
>      name,   
>     age,   
>       location: 'London' 
>       } 
>         console.log(user)

***Object Destructuring*** 
The second ES6 feature is object destructuring. Object destructuring gives you a syntax for pulling properties off of objects and into standalone variables. This is useful when working with the same object properties throughout your code. 

> const user = {  
>  name: 'Alex',  
>   age: 30,  
>    location: 'London'
> }   
>  ***/The line below uses destructuring***

>  const { age, location:address } = user    
> console.log(age) 
> console.log(address)

***Destructuring Function Arguments*** 
Destructuring works with function parameters as well. If an object is passed into a function, it can be destructured inside the function definition. 

const product = {  
   label: 'Black Pencil',    
    price: 7,   
      stock: 17,  
         salePrice: undefined 
           }  
const transaction = (type, { label, stock }) => {     
console.log(type, label, stock) 
} 
 
transaction('order', product) 

 

## Storing Data with JSON
JSON, which stands for JavaScript Object Notation, is a lightweight data format. JSON makes it easy to store or transfer data. 
Since JSON is nothing more than a string, it can be used to store data in a text file or transfer data via an HTTP requests between two machines. 

JavaScript provides two methods for working with JSON. The first is JSON.stringify and the second is JSON.parse. JSON.stringify converts a JavaScript object into a JSON string, while JSON.parse converts a JSON string into a JavaScript object. 

 

## ES6 : Arrow Functions

  Arrow functions come with a few great features, making them a nice alternative to the standard ES5 function. Arrow functions offer up an alternative syntax from the standard ES5 function. The snippet below shows an example of a standard function and then an arrow function. While the syntax is obviously different, you still have the two important pieces, an arguments list and a function body. 
 

>  const square = (x) => {   
>     return x * x    }  
>      console.log(square(7))   
>        // Will print: 49

 
 ***Shorthand Syntax*** 
Arrow functions have an optional shorthand syntax. This is useful when you have a function that immediately returns a value. 

> const squareAlt = (x) => x * x  
> console.log(squareAlt(11)) 
> // Will print: 121

 First, the curly braces wrapping the function body have been removed as well as the return statement. In place of both is the value to be returned. There’s no need for an explicit return statement, as the value provide is implicitly returned. 
 
 ***This Binding***
 Arrow functions do not  bind their own this value. Instead, the this value of the scope in which it was defined is accessible. This makes arrow functions bad candidates for methods, as this won’t be a reference to the object the method is defined on. For methods, ES6 provides a new method definition syntax.

 

## Asynchronous

You’ll get a preview of what asynchronous code looks like and how it’s different from synchronous code. 
When running asynchronous code, your code will not always execute in the order you might expect. To get started with asynchronous development, let’s use setTimeout. setTimeout is a function that allows you to run some code after a specific amount of time has passed. setTimeout accepts two arguments. The first is a callback function. This function will run after the specified amount of time has passed. The second argument is the amount of time in milliseconds to wait. 

> console.log('Start')  
>  // Wait 7 seconds before running the function 
> setTimeout(() => { 
>      console.log('Seven Times')  
>      }, 7000)   
> console.log('Stop)
> 
//Run the script and you will see the logs in the following order. 
> Start
>  Stop 
>   Seven Times


## yargs
![enter image description here](https://raw.githubusercontent.com/yargs/yargs/HEAD/yargs-logo.png)
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface. Yargs provides a powerful set of tools for composing modular command-driven-applications.

***Installation***
Stable version:

    npm i yargs

Bleeding edge version with the most recent features:

    npm i yargs@next
  
  ### Command Execution

***When a command is given on the command line, yargs will execute the following:***

1.  push the command into the current context
2.  reset non-global configuration
3.  apply command configuration via the  `builder`, if given
4.  parse and validate args from the command line, including positional args
5.  if validation succeeds, run the  `handler`  function, if given
6.  pop the command from the current context
### Providing a Command Module

For complicated commands you can pull the logic into a module. A module simply needs to export:

-   `exports.command`: string (or array of strings) that executes this command when given on the command line, first string may contain positional args
-   `exports.aliases`: array of strings (or a single string) representing aliases of  `exports.command`, positional args defined in an alias are ignored
-   `exports.describe`: string used as the description for the command in help text, use  `false`  for a hidden command
-   `exports.builder`: object declaring the options the command accepts, or a function accepting and returning a yargs instance
-   `exports.handler`: a function which will be passed the parsed argv.
