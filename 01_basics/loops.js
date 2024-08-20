

for (let i = 0; i <= 10; i++) {
    // console.log(i);
    
    
}

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
        
    }
    // console.log(element);
} 


for (let i = 1; i <= 10; i++) {
    // console.log(`inner loop ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`outer loop ${j}`);
        // console.log(`${} ${i*j}`);
        // console.log(i + "*" + j + "= " + i*j );
        // console.log(i + "*" +j );
        
        // console.log( i + " " + j);       
    }
 
}  

// const myArray = ["ironman ","superman " , "hulk" ] 
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


// for (let i = 1; i <= 20; i++) {
//      if (i == 5 ) {
//         console.log("detected 5");
//         break;
//      }
//     console.log(`value of i is  ${i}`);   
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5 ) {
       console.log("detected 5");
       continue;
    }
   console.log(`value of i is  ${i}`);   
}
