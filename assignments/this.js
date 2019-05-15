/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windo/Gobal Object Binding - When in the global scope, the value of “this” will be the window/console Object;
* 2. Implicit Binding - Implicit binding occurs when dot notation is used to invoke a function.
* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding - Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2 

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4
//Explicit Binding
//Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.

// code example for Explicit Binding
// For Call();
myFunc.call(thisContext, param1, param2, ... );
var runner = { name: 'John', myFavoriteActivity: 'running' };
MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity); // prints 'John is running!';

// For apply();
myFunc.apply(thisContext, [param1, param2, ...]);
