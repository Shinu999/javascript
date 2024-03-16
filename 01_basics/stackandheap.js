// stack (primitive) , heap (non-primitive)
  
let num = 1
console.log(num);

let myName = "Grauav"
let myanOtherName = myName
myanOtherName = "Shinu"

console.log(myName);
console.log(myanOtherName);

let userOne = {
    email :"gaurav@123.com",
    phone : 1233456
}
 
let userTow = userOne
    userTow.email = "shinu@123"

//console.log(userOne.email);
//console.log(userOne.phone);
 

console.log(userOne.email);
console.log(userTow.email);

