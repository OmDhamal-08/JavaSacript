// for each loop 
const coding = ['JavaScript', 'Python', 'C++', 'Java']

const values = coding.forEach( (value) =>
{
    //console.log(value);
    // return value
}
)

//console.log(values);
//this is because forEach does not return anything, it just executes the function for each element in the array.


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums=mynums.filter((num)=> num%2==0)
//console.log(newnums);
// this is because filter returns a new array with all the elements that pass the test implemented by the provided function. In this case, it returns all the even numbers in the array. 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userbooks=books.filter((bks)=> bks.genre==='Fiction'
// )
const userbooks=books.filter((bks)=> bks.publish>1995 && bks.genre==='History'
)
console.log(userbooks);