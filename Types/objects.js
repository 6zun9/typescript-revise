var dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
printName({ firstName: 'Elton', lastName: 'wick' });
// object annotations
var coordinates = { x: 0, y: 0 };
// return type object annotations
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
// printName({firstName: "Mick", lastName: "Jagger",age: 47}) throws type error while passing inline
var singer = { firstName: "Mick", lastName: "Jagger", age: 47, isAlive: true };
printName(singer);
var coordinate = { x: 30, y: 40 };
var doublePoint = function (point) {
    return { x: point.x * 2, y: point.y * 2 };
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " by ").concat(song.artist));
}
var mySong = {
    title: 'The Best Song Ever',
    artist: 'John Smith',
    numStreams: 1062626262,
    credits: {
        producer: '6zun9',
        writer: '6zun9',
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
