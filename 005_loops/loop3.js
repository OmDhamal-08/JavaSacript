// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets etc. It cannot be used on objects because they are not iterable.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// objects are not iterable, so we cannot use for of loop on objects, but we can use for in loop on objects

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }