// const tinderuser= new Object() // single tone object

const tinderuser={} // not singlton object 

//new Object() → You go to a factory, ask them to make you a blank notebook, they hand it to you.

// {} → You just buy a blank notebook directly from the shop.

tinderuser.id="1234abc"
tinderuser.name="Sammy"
tinderuser.isloggedn=false
// console.log(tinderuser)

const regualuser={
    email:"xyz@gmail.com",
    fullname:{
        userfullname:{
            firstname : "x",
            secondname : "y"
        }
    }
}
// console.log(regualuser)


const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

// const obj3={obj1,obj2}
// console.log(obj3)
// in this similar problem like array is occusinr objet inside another object 

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj1)
// combines the full object in proper format in a liner way 
// {} after using this we just put all the values in that empty object while if we dont use this then values directly goes to teh first object of the assign function parameter  

// or we can use spread operator 
// const obj3={...obj1,...obj2}
// console.log(obj3)


// console.log(tinderuser)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))

// // convert the keys and values in the array format first one is key and second one is value 
// console.log(Object.entries(tinderuser))

// // to check the property in the object or not 
// console.log(tinderuser.hasOwnProperty('isloggedn'))




course={
    courseinstructor:"Hitesh",
    courseid:"123rd"
}

const{courseinstructor:inst}=course
// simple naming of the comples objects keys to acess it properly and wiht minimal efforst it is called as destructuring 
// const { propertyName: newVariableName } = object;

// This syntax lets you extract and rename properties at the same time.


// {
//     name:"XYZ",
//     coursename: "js in hindi",
//     price:"free"
// }
// jason respose 





