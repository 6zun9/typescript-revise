
// Type Guarding
function triple(value: number | string){
  if(typeof value === "string"){
    return value.repeat(3);
  }
  return value ^ 3;
}

// Truthiness Guard

const printLetters = (word: string | null) => {
  if(!word) {
    console.log("word is null");
  }
  console.log("word")
}

// Equality Guarding

// function someDemo(x: string | number, y: string | number) {
//   if(x == y) {
//     x.toUpperCase()
//     y.toUpperCase()
//   }
// }

// in Operator Narrowing

type Kat = {
  meow: () => void,
};
type Dogg = {
  bark: () => void,
}

const talk = (creature: Kat | Dogg) => {
  if ("meow" in creature) {
    console.log(creature.meow())
  }else {
    console.log(creature.bark())
  };
};

const kitty: Kat = {meow: () => 'Meowww'};
talk(kitty)


interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}


function getRuntime(media: Movie | TVShow): number {
  if("numEpisodes" in media) {
    return media.episodeDuration * media.numEpisodes;
  }
  return media.duration
}


// instanceof Narrowing

function printFullDate(date: Date | string) {
  if(date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
}

class UserC {
  constructor(private username: string){

  }
}

class Company {
  constructor(public name: string){}
}

function printName(entity: User | Company) {
  if(entity instanceof UserC) {
    entity
  }else {
    entity
  }
}

// Type Predicate

interface Catt {
  name: string;
  numLives: number;
}

interface Doggy {
  name: string;
  breed: string
}

function isCat(animal: Catt | Dog): animal is Catt {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Doggy | Catt): string {
  if(isCat(animal)) {
    animal
    return "Meow";
  }
  animal
  return "Bark"
}

// discriminated unions

interface CircleI {
  kind: "circle"
  radius: number;
}

interface Sqaure {
  kind: "sqaure",
  sideLength: number;
}


interface  Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster"
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow"
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind:"pig"
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind:"sheep"
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch(animal.kind){
    case("pig"):
      return "Oink!";
    case("cow"): 
      return "Mooo!"
    case("rooster"):
      return "Cockadoodledoo!"

    default: 
      // We should never make it here if we handled all cases correctly

      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck

  }
}


const Stevie: Rooster =  {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
}

getFarmAnimalSound(Stevie);

