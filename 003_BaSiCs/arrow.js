const user ={
    username: "JohnDoe",
    email: "xyz@gmail.com",
    Login:function()
    {
        console.log(`${this.username} has logged in`)
        console.log(this) // this refers to the user object because it is called as a method of the user object
    }
}
// user.Login()
// user.username="XYZ"
// user.Login()// changing the username property of the user object and calling the Login method again to see the updated username
// console.log(this)// empty becasue this is not in any function or object context, it refers to the global object (window in browsers, global in Node.js)

// this is mainly use for refers the context of the object in which it is called. It is used to access the properties and methods of the object.


function myFunction()
{
    console.log(this) // this refers to the global object (window in browsers, global in Node.js) because it is called as a regular function
}
myFunction()