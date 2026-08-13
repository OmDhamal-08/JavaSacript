// singlton boject creation means only one instance of the object we can use it anywhere in the programm 
// non singlton means many instances of the object 
// we noramlly use non singlton object means this type of object is get created in our programs 
// this is called as object literals 


// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbol 
    // this is the deceleration of the symbol it is done like this if not thne it will same as the other fields in the object as a string 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// if we not access the symbole like this then it will be simple string 

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// use to lock the object 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// using this we can dirctly access the fields in the object

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());