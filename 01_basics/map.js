const numbers = [ 1,2,3,4,5,6,7,8,9,10]

// const newnums = numbers.map ((tiem )=> tiem + 10 )
// console.log(newnums);

const newnums = numbers
                .map ((item )=> item * 10 )
                .map((item)=>{ return item + 1})
                .filter((item)=>{return item >= 51})
console.log(newnums);