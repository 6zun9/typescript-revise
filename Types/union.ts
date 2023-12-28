// Union type
let age: number | string = 21;
age = "24"

type Point = { x: number, y: number};

type Loc = {
  lat: number
  long: number
}

let cordinates: Point | Loc = {x: 0, y: 0};
cordinates = {lat: 321.12, long: 321.12};

//// Type Narrowing with Union Type

function printAge(age: number | string): void {
  console.log(age)
}
printAge(12)
printAge('24')

function calculateTax(price: number | string, tax: number): number {
  // if(typeof price === "string") {
  //   const priceWithoutDol = price.replace("$","");
  //   return parseFloat(priceWithoutDol) * tax;
  // }
  // else {
  //   return price * tax;
  // }
  if(typeof price === "string") {
    price = parseFloat(price.replace("$",""));
  }
  return price * tax;
}

// Union type and Arrays
const stuff : (number | string)[] = ["number", "string", 12]

const cooords: (Point | Loc)[] = [];
cooords.push({x: 0, y: 0});
cooords.push({lat: 321.12, long: 321.12});

// Literal type

type Color = "Red" | "Green" | "Blue";

function printColor(color: Color): void {
  console.log(color)
}

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad"
// mood = "Polite"

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday"
// today = "JackDay"

// exercise

const highScore: number | boolean = false;

const stuffs : (number | string)[] = ["a", "b", "c", "d", "e", 1];
let stuffz : number[] | string[] = ["a", "b", "c", "d", "e"];
stuffz = [1,23,24,]

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert" ;
type SkiSchoolStudent = {
  name: string,
  age: number,
  sport: "ski" | "snowboard"
  level: SkillLevel
}

type RGB = {
  r: number,
  g: number,
  b: number
}

type HSL = {
  h: number,
  s: number,
  l: number
}

const color:(RGB | HSL)[] = [];
color.push({r: 0, g: 0, b: 0});
color.push({h: 0, s: 0, l: 0});

const greeting = (person: string | string[]): void => {
  if(typeof person === "string") {
    console.log(`Hello ${person}`)
  }
  else {
   for(let personName of person) {
    console.log(`Hello ${personName}`)
   }
  }
}