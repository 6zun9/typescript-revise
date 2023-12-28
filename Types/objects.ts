const dog = {
  name: 'Elton',
  breed: 'Australian Shepherd',
  age: 0.5
}

function printName(person:{
  firstName: string,
  lastName: string
}):void {
  console.log(`${person.firstName} ${person.lastName}`)
}

printName({firstName: 'Elton', lastName: 'wick'})

// object annotations
let coordinates : {x: number, y: number} =  {x: 0, y: 0}

// return type object annotations
function randomCoordinates():{x: number, y: number} {
  return {x: Math.random(), y: Math.random()}
}

// printName({firstName: "Mick", lastName: "Jagger",age: 47}) throws type error while passing inline
const singer = {firstName: "Mick", lastName: "Jagger", age: 47, isAlive: true}
printName(singer)

// type alias

type Point = {x: number, y: number};

let coordinate: Point = {x: 30, y: 40};
const doublePoint = (point: Point): Point => {
  return {x: point.x * 2, y: point.y * 2}
}

// Nested Objects 

type Song = {
title: string,
    artist: string,
    numStreams: number,
    credits: {
      producer: string
      writer: string
    }
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033
}

function printSong(song: Song): void {
  console.log(`${song.title} by ${song.artist}`)
}

const mySong : Song = {
  title: 'The Best Song Ever',
  artist: 'John Smith',
  numStreams: 1062626262,
  credits: {
    producer: '6zun9',
    writer: '6zun9',
  }
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)


// optional Properties

type Person = {
  firstName: string,
  lastName: string,
  age?: number
}

function printPerson(person: Person): void {
  console.log(`${person.firstName} ${person.lastName}`)
}

printPerson({firstName: 'Elton', lastName: 'wick'})
printPerson({firstName: 'Elton', lastName: 'wick', age: 47})


// readonly identifiers

type User = {
  readonly id: number,
  username: string,
};

const user: User = {
  id: 1,
  username: 'Elton',
};

console.log(user.id)
// user.id = 2 readonly identifier

// Intersection types

type Pointer = {x: number, y: number};
type Rectangle = {width: number, height: number};

type Intersecting = Pointer & Rectangle;

type Circle = {
  radius: number
};

type Colorful = {
  color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
  radius: 10,
  color: 'Yellow'
}

type Cat = {
  numLives: number
};

type Dog = {
  breed: string
}

// extended or added on
type CatDog = Cat & Dog & {
  age: number
}

const christy: CatDog  = {
  numLives: 4,
    breed: 'Australian Shepherd',
    age: 0.5
}
