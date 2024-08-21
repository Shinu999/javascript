const myArray = [1,2,3]

const mynewArray = myArray.reduce(function( acc, currval){
    // console.log(`${acc} + ${currval}`)
    return acc + currval 
},0)
// console.log(mynewArray);

const shopingCart = [
    {
        course : "python",
        price : 5000,
    },
    {
        course : "javaScript",
        price : 4000,
    },
    {
        course : "data science",
        price : 8000,
    },
    {
        course : "java",
        price : 6000,
    },
]

const priceToPay = shopingCart.reduce((acc, item )=> { return acc + item.price},0)
console.log(priceToPay);
