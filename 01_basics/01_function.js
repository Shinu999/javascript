
function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

 //sayMyName ()

//  function addTwoNumber(number1, number2){
//       console.log(number1 + number2);   

//  }
 //addTwoNumber(3,7)


//  function addTwoNumber(number1, number2){
//     let result = number1 + number2
//      return result   
// }

// const result = addTwoNumber(3,7)
//  console.log("Result :", result);

// function addTwoNumber(number1, number2){
   
//     return number1 + number2

// }
//  const result = addTwoNumber(3,7)
//  console.log("Result :", result);
 
function LoginUserMassage (username){
    if(username === undefined){
        console.log("Please enter username");
        return
        
    }
    return `${username} is Logged In`
} 

// console.log(LoginUserMassage("Gaurav"));
// console.log(LoginUserMassage(""));

function calculateNumber (...num1){
            return num1
}

// console.log(calculateNumber (200, 300, 400));

// const user = {
//     userName : "Gaurav",
//     price : 200,
// }

// console.log(user.userName);

function handleObject (anyObject){
 console.log(`userName is ${anyObject.userName} and 
price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
userName : "Shinu ",price : 250
})


const myNewArray = [200, 300, 400, 500]
// console.log(myNewArray[1]);
 
function returnSecondValue (getArray){
    return getArray[3]
    
}
 
// console.log(returnSecondValue (myNewArray));
console.log(returnSecondValue ([200,400,5000,4000,600]));