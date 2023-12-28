// import axios from 'axios';
// import _ from 'lodash';

// // _.sample([121,12,122,182,23]);

// interface User {
//   id: number;
//   name: string;
//   username: string
//   email: string
//   address: {
//     street: string
//     suite: string
//     city: string
//     zipcode: string
//     geo: {
//       lat: string;
//       lng: string;
//     }
//   },
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string
//   }
// }

// axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     console.log("WOO!!!");
//     console.log(response.data);
//     const {data} = response;
//     printUser(data);
//   })
//   .catch((error) => {
//     console.log("ERROR!",error)
//   });

// axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("WOO!!!");
//     console.log(response.data);
//     const {data} = response;
//     data.forEach(printUser);
//   })
//   .catch((error) => {
//     console.log("ERROR!",error)
//   });

//   function printUser(user: User): void {
//     console.log(user.name);
//     console.log(user.email);
//     console.log(user.phone);
//   }
