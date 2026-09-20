// if 
// if(condition) {
//     code to execute if condition is true
// } else {
//     code to execute if condition is false
// }

const userloggedIn = true;
if (2=='2') 
    // this is true because of type coercion
{
    //console.log('User is logged in as a one');
}
if(2=== '2')
    // this is false because of strict equality
{
    //console.log('User is logged in as a two');
}

const score = 200;
if (score > 100) {
    const power = 'fly';
    // this block of code will only run if the score is greater than 100
    //console.log('Score is greater than 100');
}
//console.log(power);
// ReferenceError: power is not defined out of scope of the if block because it was declared with const inside the block.


const balance = 1000;

if (balance > 500) console.log('You have enough balance');
// this is a single line if statement, it will only execute the next line of code if the condition is true
if (balance > 500) console.log('You have enough balance'),console.log('You can make a purchase');
// wrost way to do it dont do this, it will always execute the second console.log regardless of the condition and no redabel also 



