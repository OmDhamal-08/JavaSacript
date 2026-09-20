// for each loop is used to iterate over iterable objects like arrays, strings, maps, sets etc. It cannot be used on objects because they are not iterable.

const coding = ['JavaScript', 'Python', 'C++', 'Java']

coding.forEach(function (value)
{
    // console.log(value);
})

coding.forEach((value)=>
{
    //console.log(value);
})

function printValue(value) 
{
    // console.log(value);
}
coding.forEach(printValue);


coding.forEach((value, index, array)=>
{
    console.log(value, index, array);
})

