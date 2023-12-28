function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}`
}

const doSomething = (person: string = "Stranger", age: number, isFunny: boolean): string => {
  return `HI ${person} of age ${age} and is not ${isFunny ? "funny" : ""}`;
};

// anonymous functions contextual types
const colors = ["red", "green", "yellow"];

colors.map(color => {
  return color.toUpperCase();
});

// void type functions

function printTwice(message: string): void {
  console.log(message);
  console.log(message);
}

// never type

function throwError(message: string): never {
  throw new Error(message);
}

// any type