'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;

      if (animal.health === 0) {
        const index = Animal.alive.indexOf(animal);

        delete Animal.alive[index];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
