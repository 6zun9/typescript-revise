// const nums: Array<number> = [];

// const inputEl = document.querySelector<HTMLInputElement>('#username')!;
// const btn = document.querySelector<HTMLButtonElement>('.btn')!;

// example of typescript generics

function numberIdentity(item: number):number {
  return item;
}

function stringIdentity(item: string):string {
  return item;
}

function booleanIdentity(item: boolean):boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

interface Catt {
  name: string;
  breed: string;
}

// Type is usually denoted by T
function identity<Type>(item: Type):Type {
  return item;
}

identity<string>("password");
identity<Catt>({
  name: 'Kettles',
  breed: 'australian cat',
})

function getRandomElement<T>(list: T[]): T {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}

getRandomElement<string>(['a','b','c']);
getRandomElement<number>([1,2,3]);

function merge<T extends object, U extends object>(object1:T, object2: U) {
  return {
    ...object1,
    ...object2,
  }
}

const comboObj = merge({name: 'colt'},{pets: ["blue","elton"]})


interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: Lengthy): number {
  return thing.length * 2;
}

printDoubleLength({
  length: 1,
})

function makeEmptyArray<T = number>(): T[] {
  return []
}

const numbers = makeEmptyArray();

interface Songg {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class VideoPlaylist {
  public videos: Video[] = [];
}

class SongsPlaylist {
  public songs: Songg[] = [];
}


class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
  remove(el: T) {
    this.queue.splice(this.queue.indexOf(el));
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();