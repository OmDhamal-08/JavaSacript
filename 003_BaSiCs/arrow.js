const user ={
    username: "JohnDoe",
    email: "xyz@gmail.com",
    Login:function()
    {
        console.log(`${this.username} has logged in`)
        console.log(this) 
        // this refers to the user object because it is called as a method of the user object
    }
}
// user.Login()
// user.username="XYZ"
// user.Login()
// changing the username property of the user object and calling the Login method again to see the updated username
// console.log(this)
// empty becasue this is not in any function or object context, it refers to the global object (window in browsers, global in Node.js)

// this is mainly use for refers the context of the object in which it is called. It is used to access the properties and methods of the object.


function myFunction()
{
    let unsername="JohnDoe"
    console.log(this.unsername)
    // this refers to the global object because it is called in the global context, and there is no property named unsername in the global object, so it will return undefined
}
// myFunction()


const myArrowFunction= function()
{
    let unsername="JohnDoe"
    console.log(this.unsername)
    // this refers to the global object because it is called in the global context, and there is no property named unsername in the global object, so it will return undefined
}
// myArrowFunction()
const myArrowFunction2= ()=>
{
    let unsername="JohnDoe"
    console.log(this.unsername)
}
myArrowFunction2()
// this refers to the global object because it is called in the global context, and there is no property named unsername in the global object, so it will return undefined


// ()=>() arrow function

// const addtwoNumbers =(a,b) =>
// {
//     return a+b
// }

// const addtwoNumbers =(a,b) => a+b 
// // implicit return, no need to use return statement and curly braces, it will return the value of the expression after the arrow

// const addtwoNumbers =(a,b) => (a+b)
// this way is introduced becasue we can return an object literal from an arrow function, if we use curly braces it will be treated as a block of code and not an object literal, so we need to wrap the object literal in parentheses to tell the interpreter that it is an expression and not a block of code.

const addtwoNumbers =(a,b) => ({username: 'JohnDoe'})
// returning an object literal from an arrow function, we need to wrap the object literal in parentheses to tell the interpreter that it is an expression and not a block of code.

console.log(addtwoNumbers(2,3)) 