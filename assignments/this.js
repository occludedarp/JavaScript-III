/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*


* 1. the default object that this refers to, the entire browser window

* 2. the use of dot notation employs this. as a reference to the object that encloses your current scope

* 3. after this. has been implicitly bound within the context of a class constructor object, the keyword 'new' subsequently binds this. to any newly declared objects derived from the class constructor

* 4. assigning this. to an object of your choosing
*
* write out a code example of each explanation above
*/

// Principle 1

console.log(this)

// Principle 2

kennan.speak = function(){
    return `Hello, my name is ${this.name}!`
  }

// Principle 3

function Coffee(region, roast, aromatics) {
    this.region = region,
    this.roast = roast,
    this.aromatics = aromatics
  }
  
  let favoriteCoffee = new Coffee('Ethiopian', 'light roast', 'floral');
    
  console.log(favoriteCoffee)

// Principle 4

let myAnimal ={
    name: 'Orca',
    age: 33,
    sound: 'mooo'
    }
  
  function orcaSound(){
    console.log(this.sound) 
  }
  
  let newOrcaSound = orcaSound.bind(myAnimal);
  newOrcaSound();