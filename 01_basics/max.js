const myArray = [20, 30, 50, 40 ,60 , 80, 70, 100, 90] 
let largest= myArray[0];

// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
         
        //  console.log(myArray[i]);
         
    if (myArray[i] > largest) {
       largest = myArray[i] ;
    }
//     //  const element = myArray[i];
//     // console.log(element);
    
}
console.log(largest);






let numbers = [3, 7, 2, 8, 5];
let max = numbers[0]; // initialize to the first value

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// console.log(max);
