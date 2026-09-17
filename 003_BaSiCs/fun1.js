function sayhello()
{
    console.log("Hello....")
}

// sayhello // this is the refrence of the object 
// sayhello() // this is the execuation of the function 


function addtwo(number1,number2) // this are parameters 
{
    // console.log(number1+number2)
    return number1+number2
}
addtwo()
addtwo(3,4) // this are arguments 
// const asn=addtwo("3",4)
// const ans=addtwo(3,"4")
// console.log(typeof(asn))
// console.log(typeof(ans))

function loginusermesg(username)
{
    if(username===undefined)
        {
            console.log("please enter the user name")
            return 
        } 
    return `${username} just logged in `
}

// console.log(loginusermesg("XyZ"))

// console.log(loginusermesg()) // by defalut is uses undefined 
// to avoid thid we can do two things like one is by using i statments and anotehr one os by giving the defalut values to it in the parameters 


function cartprice(num)
{
    return num
}

// console.log(cartprice(10))
// console.log(cartprice(10,20,40,50))

function cartprice1(...num) // rest operator 
{
    return num
}
// console.log(cartprice1(10,20,40,50))


function cartprice2(val1,val2,...num)  
{
    return num
}
// console.log(cartprice2(10,20,40,50))

user=
{
    username:"abc",
    price:2000
}
user1=
{
    username:"abc",
    prices:2000
}
// show error thet is undefined because the mapping of the parameters are not done properly 

function handelobject(anyobj)
{
    console.log(`Usernaem :${anyobj.username} and price is ${anyobj.price}`)
}

// handelobject(user)
// handelobject(user1) // same show the error 


const myarray=[200,400,600,2849]

function returvalue(newarray)
{
    return newarray[2]
}
console.log(returvalue(myarray))