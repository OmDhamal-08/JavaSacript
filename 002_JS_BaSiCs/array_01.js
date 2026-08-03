// so whene we create the copy of the array then its shallow copy get created 
// shallow copy means have same refrence point in the memory for both the array i.e. for og array as well as copied array 
// and deep copy means have different refrence point in the memory means the proper copy of the array 

const myArray=[1,2,3,4,5,6,7]
//console.log(myArray[0]);
const newarray=new Array(1,2,3,4,5)
//console.log(newarray[1]);



// shift and unshift

newarray.unshift(2) 
// it will add the element at the start of the array and return the new length of the array
//console.log(newarray);
newarray.shift() 
// it will remove the first element of the array and return the removed element
//console.log(newarray);



// pop and push

newarray.push(10) 
// it will add the element at the end of the array and return the new length of the array
//console.log(newarray);
newarray.pop() 
// it will remove the last element of the array and return the removed element
//console.log(newarray);



// includes and indexOf

//console.log(newarray.includes(3))
// it will return true if the element is present in the array otherwise it will return false
//.log(newarray.indexOf(10)) // it will return -1 if the element is not present in the array



// join method
const extraarray=newarray.join()
// it will join the array elements and return the string of the array elements
// console.log(extraarray);
// console.log(newarray);
// console.log(typeof extraarray);



// slice and splice 

const array1=[1,2,3,4,5,6,7,8,9]
console.log("OG ",array1);

const array2=array1.slice(2,5) 
// it will return the new array from the original array from index 2 to index 5 but not including index 5
console.log("OG array after slice ",array1);
console.log("Sliced array ",array2);

const array3=array1.splice(2,5)
// it will remove the elements from the original array from index 2 to index 5 and return the removed elements in a new array
console.log("OG array after splice ",array1);
console.log("Spliced array ",array3);




