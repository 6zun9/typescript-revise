import Dog from './Dog';
import ShelterDog from './ShelterDog';
import {add, multiply, divide} from './utils';

const elton = new Dog("Elton","Aussie", 0.5);
elton.bark();

const buffy = new ShelterDog("Buffy","Pitbull", 0.5,"Desert Springs");
buffy.bark();

console.log(add(4,5))
console.log(multiply(4,5))
console.log(divide(4,5))
