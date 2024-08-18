const user = {
    username : "Gaurav",
    price : 299,
    wellcomemassage : function() {
        console.log(`my name is ${this.username}, wellcome to my website `);
console.log(this);

    }  
}

// user.wellcomemassage()
// user.username="Shinu"
// user.wellcomemassage()

// console.log(this);


// function chai() {
//     console.log("Gaurav");
    // let username = "Shinu"
//     console.log(this);  
// }
// chai()

// const chai = function() {
//     let username = "Shinu"

//      console.log(username);

//     // console.log(this);     
// }
// chai()

 
// const chai= () =>{
//     // console.log("Gaurav");
//     let username = "Shinu"
//     console.log(this);  
// }
// chai()





// const addTwo = (num1 , num2) => {
//           return num1 + num2
// }   
// console.log(add(8,3));


// const addTwo = (num1 , num2) => num1 + num2   
// console.log(addTwo(8,3));

// const addTwo = (num1 , num2) => (num1 + num2)   

// console.log(addTwo(8,3));


const addTwo = (num1 , num2) => ({username : "Gaurav"})   

console.log(addTwo(8,3));