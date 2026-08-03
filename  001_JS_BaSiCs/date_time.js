// Dates

let myDate = new Date()
// this will give the current date and time
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// this will give the date and time of the date created manually 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// this will give the timestamp of the current date and time
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// this will give the current date and time
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
// this will give the current day of the week

// month are start form 0 while usign getMonth() method and the month are start from 1 while using getDate() method