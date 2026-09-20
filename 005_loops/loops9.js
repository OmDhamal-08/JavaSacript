// reduce

//  const myArray = [1, 2, 3, 4, 5]
//  const sum=myArray.reduce((acc,val)=> {return acc+val},0)
//  console.log(sum);

 const myArray = [1, 2, 3, 4, 5]
 const sum=myArray.reduce((acc,val)=>
    {
        console.log(`ACC ${acc} and VAL ${val}`)
            // accc is accumulator, it will store the value of previous in this case it will store the sum iteration and val is the current value of the array
        return acc+val
    },0)
    // 0 is the initial value of accumulator
 console.log(sum);
