// string
let movieTitle: string = "Amadeus";
movieTitle =  "Arrival";

// number
let myNumber: number = 6;
myNumber = 8;

// boolean
let gameOver : boolean = true;
gameOver = false;

// Type Inference

// any

// delayed initialization and implicit any

const movies = ["Arrival","The Thing","Aliens","Amadeus"];

let foundMovie: string;

for(let movie of movies) {
  if(movie === "Amadeus"){
    foundMovie = movie
  }
}






