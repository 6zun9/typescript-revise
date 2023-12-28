interface PointInterface {
  x: number;
  y: number;
};

const pt:PointInterface = {x: 0, y: 0};

interface PersonInterface {
  readonly id: number;
  first:string;
  last: string;
  nickname?:string;
  sayHi: (name:string) => string;
}

const thomas: PersonInterface = {first:"Thomas", last:"Hardy", nickname: "Tom",id: 1,
  sayHi: (name: string) => {
    return `Hi ${name}`;
  }};

thomas.first = "Jackson";
// thomas.id = 2;


// Interface Methods

interface ProductInterface {
  name: string;
  price: number;
  applyDiscount(discount:number):number;
}

const shoes : ProductInterface = {name: "Shoes",price:100, applyDiscount(amount: number) {
  return this.price - amount;
}};

shoes.applyDiscount(10);

// reopen and redefine properties in interfaces

interface DogInterface {
  name: string;
  age: number;
}

interface DogInterface {
  breed: string;
  bark():string ;
}


const elton: DogInterface =  {
  name: "Elton",
  age: 0.5,
  breed: "Australian",
  bark():string {
      return "Woof";
    }
}

interface ServiceDog extends DogInterface { 
  job: "drug sniffer" | "bomb" | "guide dog"
  }


const chewy: ServiceDog = {
  name: "Chewy",
  age: 0.5,
  breed: "Labrador",
  job: "guide dog",
  bark():string {
      return "Woof";
    }
}

// Interface multiple inheritance

interface People {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends People, Employee {
  level: string;
  languages: string[]
}

const Bishal: Engineer = {
  name: "Bishal",
  id: 1,
  email: "bishal.j.rayamajhi@gmail.com",
  level: "senior",
  languages: ["typeScript", "javaScript"]
}


// Type vs Interfaces
// 1. Interfaces can be used only to describe the shape of an object
// 2. With interfaces with we can reopen and assign again
// 3. With interfaces we can inherit from any interface