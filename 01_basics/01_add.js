// ++++++++++++++++++++++++  add +++++++++++++++++++++++

// function add (num1 , num2 ){

//     console.log(num1+num2);
// }
// add(5,7)

// +++++++++++++++++++++++++++++++ mul +++++++++++++++++++++++++

// function mul (num1 , num2 ){

//     console.log(num1*num2);
// }
// mul(5,7)


// function mul ( a , b ){
//          let result = a*b;
//          return result;
// }

// let a = mul (3,5) ;
// console.log( "your ans is :", a);


// function addTwoString (a , b) {
//     let c = a + b;
//     return c;
// }

// let d = addTwoString ("Gaurav", " kumar"  );
// console.log(d);


// function addmanyNum(){
       
//            let ans = 0;
//         for (let i = 0; i < arguments.length; i++) {
//         ans = ans + arguments [i];
        
   
//         }
//         return ans;
// }

//  let result  = addmanyNum(3,5,6,7,8,9);

// console.log(result );

function addnumber (...number) {
    let ans = 0;
    for (let i = 0; i < number .length; i++) {
         ans = ans + number[i];
        
    }

    return ans ;
}
let result  = addnumber(3,8,6,7,8,9);

console.log(result );
