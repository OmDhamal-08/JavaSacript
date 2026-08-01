//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this is the static one so in this we just use stack to store the data 
let emailId="om@gmail.com"

let anotherEmailId=emailId

anotherEmailId="dhamal@gmail.com"

console.log(anotherEmailId);
console.log(emailId);

// this is refrence one so in this we just do use heap for the storing of the data in the memory 
let myobjone=
{
    name:"Om",
    age:21,
    email:"personal@gmail.com"
}

let myobjtwo=myobjone

myobjone.email="NOTYOURTYPE@gmail.com"
myobjtwo.age=22

console.table([myobjone.name,myobjone.age,myobjone.email]);
console.table([myobjtwo.name,myobjtwo.age,myobjtwo.email]);


