const myArray = [1,2,3,4,5,6,7,8,9,10]

// const mynewArray = myArray.filter((item ) => item > 4)
//     console.log(mynewArray);
    

// const mynewArray = myArray.filter((item)=>{
//         return  item > 5
// })

// console.log(mynewArray);

// const newArr = []

// myArray.forEach((item)=>{
//         if (item > 5) {
//             newArr.push(item)
//         }
// })
//   console.log(newArr); 

const books =[
    {
        title:"book one", ganre:"fiction", publish:1981,
    },
    {
        title:"book two", ganre:"Nonfiction", publish:1992,
    },
    {
        title:"book three", ganre:"history", publish:1999,
    },
    {
        title:"book four", ganre:"Nonfiction", publish:1998,
    },
    {
        title:"book five", ganre:"science", publish:2009,
    },
    {
        title:"book six", ganre:"fiction", publish:1987,
    },
    {
        title:"book seven", ganre:"history", publish:1986,
    },
    {
        title:"book seven", ganre:"science", publish:2011,
    },

]

// console.log(books);
// const userBooks = books.filter((bk)=>{ return bk.ganre === "history"})

// console.log(userBooks);


// const userBooks = books.filter((bk)=>{ return bk.publish >= 2000})

// console.log(userBooks);


// const userBooks = books.filter((bk)=>{ return bk.publish <= 2000})

// console.log(userBooks);


const userBooks = books.filter((bk)=>{ return bk.ganre==="Nonfiction"})

console.log(userBooks);


  