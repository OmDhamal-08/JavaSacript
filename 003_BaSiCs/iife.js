// immediately innvokked function expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:
// to remove the pollution caused by variables declared in the global scope, and to create a new scope for variables to avoid conflicts with other code.fot this reason we are using IIFE to create a new scope for our variables and avoid polluting the global scope.

// (function definition)(function invocation)

(function chai()
{
    console.log("I am an IIFE function")
})();
// this is named IIFE function, we can also create an anonymous IIFE function as shown below

(()=>{
    console.log("I am an anonymous IIFE function")
})();
// this is anonymous IIFE function, we can also create a named IIFE function as shown above

((name)=>
{
    console.log(`I am an IIFE function with parameter ${name}`)
})(name="XyZ");
// this is IIFE function with parameter, we can also create an IIFE function without parameter as shown above


// so IIFE function runs globally it don't have idea where to stop then we need to give semicolon at the end of the function to tell the interpreter that this is the end of the function and it should stop here, otherwise it will throw an error for next line of code if it is not a function or an expression, so we need to give semicolon at the end of the IIFE function to tell the interpreter that this is the end of the function and it should stop here, otherwise it will throw an error for next line of code if it is not a function or an expression.


