// for in loop is used to iterate over the properties of an object, and for of loop is used to iterate over the values of an iterable object like array, string, map, set etc.
const myobject = {
    game1: 'NFS',
    game2: 'Spiderman',
    js:'JavaScript',
    py:'Python',
    cpp:'C++'
}
for (const key in myobject) 
    {
        // console.log(key, ':-', myobject[key]);
    }



const myArray = ['flash', "batman", "superman"]
for (const index in myArray) {
    console.log(myArray[index]);
}


