"use strict";
class Player {
  // static Properties
  static description = 'Player in our Game';
  // # private field
  #score = 0;  // classfields
  #numLives = 10; // classfields
  // constructor
  constructor(first,last) {
    this.first = first;
    this.last = last;
    this.#secret(); // private method
  }

  generateRandomName() {
    const firstName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const lastName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return {
      firstName,
      lastName
    }
  }

  // static method
  static randomPlayer() {
    const {firstName, lastName} = new Player().generateRandomName();
    return new Player(firstName,lastName);
  }

  // getter
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  // setter
  get score() {
    return this.#score;
  }

  set score(score) {
    if(score < 0) {
      throw new Error("Score must be greater than zero");
    }
     this.#score = score;
  }

  set fullName(name) {
    const [first,last] = name.split(" ");
    this.first = first;
    this.last = last;
  }

  taunt() {
    console.log("BOOM!");
  }
  looseLife() {
    this.#numLives--;
  }
  getScore() {
    return this.#score;
  }
  setScore(score) {
    this.#score = score;
  }

  #secret() {
    console.log("SECRET!");
  }
};

class AdminPlayer extends Player {
  constructor(first,last,powers) {
    super(first,last);
    this.powers = powers;
  }
  isAdmin = true;
}

const adminPlayer = new AdminPlayer("admin","cadmin",["delete","save the world"]);


const player1 = new Player("Blue","Steele");
player1.taunt();
console.log(player1.first)
console.log(player1)
console.log(player1.fullName)
console.log(player1.score)
console.log(player1.score = 123)

const player2 = new Player("Charlie","Brown");
player2.taunt();
console.log(player2.first)