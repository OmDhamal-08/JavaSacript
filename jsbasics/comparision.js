// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1); 

/* so in this above thing the data type is converted automatically as per need javascript do it automatically for us*/ 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);

// === checks both type and value, so it does not perform type coercion (except for a few internal language details unrelated to primitive conversion).

console.log("" == 0); // here convert to number then both 0 then output is true 



// 1) Relational Comparison (>, <, >=, <=)

//     The > operator performs a numeric comparison.
//     Before comparing, JavaScript converts operands to numbers.
//     same for all the other operators above list 

// 2) Abstract Equality Comparison (==)

//     == does NOT simply convert everything to numbers.
//     Instead it follows the Abstract Equality Algorithm.
//     One special rule says:
//     If one value is null and the other is not undefined, return false immediately.