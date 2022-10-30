//Make the USS HelloWorld class object (even though there is only one ship for team Earth right now I will create a class b/c it makes more sense to me with my logic and also so I could always add new earthSpaceShip instances in the future with an array)

class EarthSpaceShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.isAlive = true;
  }
  attack(target) {
    target.hull = target.hull - ussHelloWorld.firepower; //firepower is the amount of damage done to the hull of the target with a successful hit so take the target's current hull and subtract the attacker's firepower
    if (target.hull <= 0) {
      //If hull reaches 0 or less, the ship is destroyed
      target.isAlive = false;
      console.log("You have destroyed the target!");
    }
  }
}
const ussHelloWorld = new EarthSpaceShip("USS HelloWorld", 20, 5, 0.7);
console.log(ussHelloWorld);

//Make an alienSpaceShip class object (will create an array of 6 consts of this class using a for loop)

class AlienSpaceShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.isAlive = true;
  }
}
//creating one AlienSpaceShip instance first and assigning it values to test the battle now between these 2 ships only
const interGalactic = new AlienSpaceShip("Intergalactic", 4, 3, 0.7);
console.log(interGalactic);

//while I'm thinking of alien spaceship names:  Aural Pleasure, Blazing Arrow, Cosmic Flows, planetHopper, spaceCase, galaxy warriors, infinity, solarShip, starryNight, Earth Shatterer, Abyss, Cosmic Jungle, Not a Meteorite,  Gravity Sucks, Universal Soldiers , Sonic Boom, Saturn Hoops, Alienaughts ,

ussHelloWorld.attack(interGalactic); //  running the attack method and passing the alien ship through the function as the target
console.log(interGalactic.hull); // yay! my one ship test works, so onto the next.
// 1st commit to github
