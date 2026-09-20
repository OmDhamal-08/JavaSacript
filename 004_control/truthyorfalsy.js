const useremail = "xyz@gmail.com"

if (useremail) {
    console.log("Truthy")
} 
else {
    console.log("Falsy")
}
// In this case, the if statement will evaluate to true because the useremail variable is a non-empty string, which is considered truthy in JavaScript. Therefore, the output will be "Truthy". If the useremail variable was an empty string or null or undefined, then the output would be "Falsy".

// Fasly values 
// false,0,-0, null, undefined, NaN,BigInt 0n, '' (empty string) are considered falsy values in JavaScript. All other values are considered truthy.

// false==0, false=='' and 0=='' are all true because of type coercion in JavaScript. However, false===0, false==='', and 0=== '' are all false because they are not of the same type.




// NUllish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is often used to provide default values for variables that may be null or undefined.

let val
val=10 ?? null 
// val will be 10 because the left-hand side operand is not null or undefined
val=null ?? 10 
// val will be 10 because the left-hand side operand is null
val=undefined ?? 10 
// val will be 10 because the left-hand side operand is undefined
val=0 ?? 10 
// val will be 0 because the left-hand side operand is not null or undefined
val='' ?? 10 
// val will be '' because the left-hand side operand is not null or undefined

console.log(val)


// ternary operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. It is often used as a shorthand for if-else statements.

// condition ? expression1 : expression2

let age = 18;
// let canvote = age >=18 ? 'You can vote' : 'You cannot vote';
console.log(age >=18 ? 'You can vote' : 'You cannot vote')

