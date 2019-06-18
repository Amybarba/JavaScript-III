/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. (Object Binding) Means the value of 'this' is calling the object windor or console
 * 2. (Implicit Binding) Means the value of 'this' is calling what is before the dot function
 * 3. (New Binding) Means the value of 'this' is calling the constructor function which is calling the objest created
 * 4. (Explicit Binding) Means the value of 'this' is calling the 'method' or 'call'
 *
 * write out a code example of each explanation above
 */

// Principle 1

// // code example for Window Binding

// function hello(param) {
//     console.log(this);
//     return `My name is: ${param}`;
//   }
//   console.log(hello("Amy"));

// // Principle 2

// // code example for Implicit Binding

// const greeting = {
//     salutation: 'Welcome to my home, ',
//     offers: function(name) {
//       console.log(`${this.salutation} can I get you some ${name}`);
//       console.log(this);
//     }
//   };
//   greeting.offers('refreshments');

// Principle 3

// code example for New Binding

// function ArtificialInt(robot) {
//     this.greeting = 'Welcome to the New World';
//     this.robot = robot;
//     this.speak = function() {
//       console.log(this.greeting + this.robot);
//       console.log(this);
//     };
//   }

//   const atlantis = new ArtificialInt('Indigo');
//   const indigo = new ArtificialInt('Atlantis');

//   atlantis.speak();
//     indigo.speak();

// // Principle 4

// // code example for Explicit Binding

function ArtificialInt(robot) {
  this.greeting = "Welcome to the New World";
  this.robot = robot;
  this.speak = function() {
    console.log(this.greeting + this.robot);
    console.log(this);
  };
}

const atlantis = new ArtificialInt("Indigo");
const indigo = new ArtificialInt("Atlantis");

atlantis.speak.call(indigo);
indigo.speak.apply(atlantis);

atlantis.speak();
indigo.speak();
