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

const names = [
  "InterGalactic",
  "AlieNaut",
  "PlanetHopper",
  "SpaceCase",
  "CosmicJungle",
  "EarthShatterer",
];

const alienShipsArray = [];

for (let i = 0; i < names.length; i++) {
  alienShipsArray.push(
    new Ship(
      names[i],
      Math.floor(Math.random() * 4) + 3,
      Math.floor(Math.random() * 3) + 2,
      Math.floor(Math.random() * 3 + 6) / 10
    )
  );
}
//console.log(alienShipsArray);
ussHelloWorld.attack(alienShipsArray[i]);
const 
let i = 0;

alienShipsArray.forEach(Ship);

if (ussHelloWorld.hull <= 0) {
  console.log(
    `Sorry Earthlings, but your hull has reached ${ussHelloWorld.hull} and your Game is Over.`
  );
}

if (alienShipsArray[i].hull <= 0) {
  console.log(
    `Sorry Aliens, but your hull has reached ${alienShipsArray[i].hull} and your Game is Over.`
  );
}

const battle = function (humans, aliens) {
  aliens.attack(humans);
  if (humans.hull > 0) {
    humans.attack(aliens);
  }
};

battle(ussHelloWorld, alienShipsArray[i]);
