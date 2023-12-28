class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;
  private highScore: number = 0;
  protected lowScore: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  set hiScore(score: number) {
     this.highScore = score;
  }

  get hiScore(): number {
    return this.highScore;
  }

  private secretMethod(): void {
    console.log("secretMethod");
  }

}

const Elton = new Player("Elton", "Steele");


class UserClass {
  public readonly userId:number = 0;
  constructor(public readonly first:string, public readonly last:string) {

  };
}

interface Colorfulness {
  color: string;
}

interface Printable {
  print(): void;
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  setLowScore(score: number) {
    this.lowScore = score;
  }
}


class Bike implements Colorfulness {
  constructor(public color:string){}

};

const bike1 = new Bike("red");
class Jacket implements Colorfulness, Printable {
  constructor(public brand: string, public color:string){}

  print() {
    console.log(`${this.color} ${this.brand}`);
  }
}

const jacket = new Jacket("Gucchi", "Yellow")

Elton.score = 12332;


// Abstract Class 

abstract class Employee {
  constructor(public firstName: string, public lastName: string) {
  }
  abstract getPay(): number;

  greet( ) {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

class FullTimeEmployee extends Employee { 
  constructor(public firstName: string, public lastName: string,  private salary: number){
      super(firstName, lastName);
  }
  getPay(){
    return this.salary;
  }
};


class PartTimeEmployee extends Employee {
  constructor(public firstName: string, public lastName: string, private hourlyRate: number, private hoursWorked: number){
    super(firstName,lastName);
  }
  getPay(){
    return this.hourlyRate * this.hoursWorked;
  }
};

const betty = new FullTimeEmployee("Betty", "White", 100020);
const bill = new PartTimeEmployee("Bill", "Smith", 10, 12);
