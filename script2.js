class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.isAlive = true;
  }
  attack(target) {
    target.hull = target.hull - this.firepower;
    if (target.hull <= 0) {
      target.isAlive = false;
      console.log(`You have destroyed ${target.name}!`);
    } else {
      target.isAlive = true;
      console.log(
        `${target.name} has survived with a remaining hull of ${target.hull}. Prepare for revenge attack!`
      );
      target.attack(this); //If the ship survives, it attacks you
    }
  }
}

const ussHelloWorld = new Ship("USS HelloWorld", 20, 5, 0.7);
//console.log(ussHelloWorld);

const interGalactic = new Ship("Intergalactic", 6, 3, 0.7);
//console.log(interGalactic);

ussHelloWorld.attack(interGalactic);

//tested the attack on interGalctic with a hull of 4 and a hull of 6 and they both returned the proper console.log in the console

//define a battle function

// const battle = function (humans, aliens) {
//   if (aliens.isALive === true) {
//     aliens.attack(humans);
//   }
// };

// battle(ussHelloWorld, interGalactic);
// // battle(target) {
// //     if (target.isAlive === true) {
// //       target.attack(this.name);
// //     }
// //   }
console.log(interGalactic);
console.log(ussHelloWorld);

if (ussHelloWorld.hull <= 0) {
  console.log(
    `Sorry Earthlings, but your hull has reached ${ussHelloWorld.hull} and your Game is Over.`
  );
}

if (interGalactic.hull <= 0) {
  console.log(
    `Sorry Aliens, but your hull has reached ${interGalactic.hull} and your Game is Over.`
  );
}

//but the directions say:
// You attack the first alien ship
// If the ship survives, it attacks you
// ***If you survive, you attack the ship again***

// const battle = function (humans, aliens) {
//   aliens.attack(humans);
//   if (humans.hull > 0) {
//     humans.attack(aliens);
//   }
// };
// battle(ussHelloWorld, interGalactic);

//Yay!  The above code is working and the console.log for this particular instance of only 1 earth ship and only 1 alien ship with defined values, looks like this:

// $ node script2.js
// Intergalactic has survived with a remaining hull of 1. Prepare for revenge attack!
// USS HelloWorld has survived with a remaining hull of 17. Prepare for revenge attack!
// You have destroyed Intergalactic!
// Ship {
//   name: 'Intergalactic',
//   hull: -4,
//   firepower: 3,
//   accuracy: 0.7,
//   isAlive: false
// }
// Ship {
//   name: 'USS HelloWorld',
//   hull: 17,
//   firepower: 5,
//   accuracy: 0.7,
//   isAlive: true
// }
// Sorry Aliens, but your hull has reached -4 and your Game is Over.

//NOW i need to add in 5 more alien ships and randomize their values!!
//referring to my notes from last Wednesday afternoon when Teo played the 4 step game on Slack with class Pokemon and step 2 being create an array consisting of 3 instances of Pokemon class with assigned values for their properties. I need to randomize their values instead and create an array consisting of 6 instances (I will eventualy comment out the interGallactic const with defined properties from above)

//const interGalacticArray = [];

//for (let i = 0; i < 6; i++) {
//   interGalacticArray.push(
//     new Ship(
//       "InterGalactic " + (i + 1),
//       Math.floor(Math.random() * 10),
//       Math.floor(Math.random() * 10),
//       Math.random()
//     )
//   );
// }
//console.log(interGalacticArray);

//now i have to get these random alien values to fall within these ranges and somehow get the accuracy to stop at one decimal  place.
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
//found the answer on this site: https://tmdarneille.gitbook.io/seirfx/javascript/oop1/oop-space-battle
// this.hull = Math.floor(Math.random() * 4) + 3;
// this.firepower = Math.floor(Math.random() * 3) + 2;
// this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

const interGalacticArray = [];

for (let i = 0; i < 6; i++) {
  interGalacticArray.push(
    new Ship(
      "InterGalactic " + (i + 1),
      Math.floor(Math.random() * 4) + 3,
      Math.floor(Math.random() * 3) + 2,
      Math.floor(Math.random() * 3 + 6) / 10
    )
  );
}
console.log(interGalacticArray);
//yay the printed array looks perfect! (lol, i did not get to use my alien spaceship names i came up with before, this way was much quicker.)

//now it is 3am on Monday morning and i have to go to sleep, so tomorrow I need to replace the single ship with the array and delete the single ship and it's predefined property values and on from there...
