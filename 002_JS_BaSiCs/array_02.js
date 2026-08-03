const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// it will add the dc_heros array as a single element in the marvel_heros array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// it will merge the two arrays and return a new array with all the elements of both arrays

const all_new_heros = [...marvel_heros, ...dc_heros]
// it will merge the two arrays and return a new array with all the elements of both arrays this is called spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// it will flatten the array and return a new array with all the elements of the original array in a single level we can give the depth of the array to flatten it if we give Infinity it will flatten the array to a single level
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
// it will return true if the given value is an array otherwise it will return false

console.log(Array.from("Hitesh"))
// it will return a new array from the given value if the given value is iterable otherwise it will throw an error

console.log(Array.from({name: "hitesh"})) // interesting
// it will return a new array from the given value if the given value is iterable otherwise it will throw an error but in this case it will return an empty array because the given value is not iterable if we want to get the values of the object we can use Object.values() method to get the values of the object and then we can use Array.from() method to convert it into an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// it will return a new array with the given values as elements of the array