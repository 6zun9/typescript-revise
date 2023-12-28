const activeUsers: string[] = [];
activeUsers.push("Alex");

const ageList: number[] = [];
ageList.push(23);

// alternatives

const bools : Array<boolean> = [true, false]

// Complex Type Arrays
type Points = { x: number, y: number};

const coords: Points[] = [];

coords.push({ x: 0, y:0});


// MultiDimensional Arrays Type

type Matrix = Array<Array<number>>

const matrix: Matrix = [
  [1, 2, 3],
  [4, 5, 6]
]
const board: string[][] = [["X", "Y", "Z"], ["A", "B", "C"]];

// exercise

// create an empty array of numbers called "ages"
const ages: number[] = [];

// create an array variable called gameBoard that starts as an empty array
// it should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// create a Product type that contains a name and price
// {"name": "coffee mug", "price":115.50}

type Product = {
  name: string;
  price: number;
}

// write a function called gameTotal that accepts an array of Product types
// it should return the sum of all the products prices

const getTotal = (Products: Product[]): number => {
  let total = 0;
  for(let product of Products){
    total += product.price;
  }
  return total;
};

const getTotalByUsingReduce = (Products: Product[]):number => Products.reduce((total,product) => total + product.price,0);




