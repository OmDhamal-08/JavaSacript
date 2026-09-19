let a=10
const b=20
var c=30

// console.log(a)
// console.log(b)
// console.log(c)

// core scope and the code scope of node is different 

function one()
{
    const username="hitesh"
    function two()
    {
        const website ="youtube"
        // console.log(username)
    }
    // console.log(website)
    // it will give an error for the print becasue this cause error due to scope 

    two()
    // if we dont called it then function two is not executed and then we dont give value of username 
}
one()


if(true)
{
    const username="hitesh"
    if(username==="hitesh")
    {
        const website ="youtube"
        // console.log(username+ website)
    }
    // console.log(website)
    // dont print due to the scope issue 
}
// console.log(username)
// dont print due to the scope issue 



// ++++++++++++ interesting +++++++++++++++

function addone(num)
{
    return num+1
}

console.log(addone(5))
// hoisted 

const addtwo=function(num)
{
    return num+2
}
console.log(addtwo(5))
// non hoisted 