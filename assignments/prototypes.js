/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
return `${this.name} was removed from the game.`
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes){
    GameObject.call(this,attributes);
  this.healthPoints = attributes.healthPoints;

}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function (num){
  return `${this.name} took ${num} damage points.`
};


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {
  CharacterStats.call(this,attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`
};


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/



// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(attributes) {
  Humanoid.call(this, attributes);

  this.element = attributes.element;
  this.glory = attributes.glory;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.lightBlast = function(opponent){
  let lightEnvelope = opponent.healthPoints - 5
  if( opponent.healthPoints  <= 5){
    return opponent.destroy()
  }else{
    opponent.healthPoints = lightEnvelope
    return `${opponent.name}'s health decreased to ${lightEnvelope}. ${opponent.name} is trapped in an envelope of light.`
  }
  
}


function Villain(attributes){
  Humanoid.call(this, attributes);
    this.scorn = attributes.scorn;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.TenebrousManifestation = function(opponent){
let shadowbite = opponent.healthPoints - 2;
  if(opponent.healthPoints <= 2){
    return opponent.destroy()
  }else{
    opponent.healthPoints = shadowbite;
    return `${opponent.name} was bit by the shadow! ${opponent.name}'s health decreased to ${shadowbite}.`
  }
}

Villain.prototype.subterfugalAid = function(opponent){
  let deceive = opponent.healthPoints + 3;
  opponent.weapons = opponent.weapons.shift()
  return `${opponent.name}'s health increased to ${deceive}! ...What?! ${this.name} stole one of your weapons!`

}


const lightningMage = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 4,
    height: 8,

  },
  healthPoints: 18, 
  name: 'Raiden',
  team: 'Temple of Asgard',
  weapons: [
    'Superconductive Staff',
    'Lightning',
  ],
  language: 'Ancient in origin',
  element: 'lightning',
  glory: 5
  // the higher the glory the more altruism you spread to others allowing them to share healthpoints and weapons
});

const shadowBinder = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6,

  },
  healthPoints: 15, 
  name: 'Vakoma',
  team: 'House of the Undying',
  weapons: [
    'Sleeve Conceiler'
  ],
  language: 'Worm Tongue',
  element: 'Shadow',
  scorn: 7
  //the higher the scorn the more strife you sew, further enabling deception
});

//Raiden the lightning-mage and Lilith the archer VS Vakoma the shadow-binder

console.log(lightningMage.lightBlast(shadowBinder));
console.log(shadowBinder.subterfugalAid(archer));
console.log(shadowBinder.TenebrousManifestation(lightningMage));
console.log(shadowBinder.subterfugalAid(lightningMage));
console.log(lightningMage.lightBlast(shadowBinder));

//To Be Continued...