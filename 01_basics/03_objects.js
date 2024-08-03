// singleton
//Object.create

// objects literals 

const mySym = Symbol("key1")

const JsUser = {

    name : "Gaurav",
    "Full name" : "Gaurav Kuamr",
    [mySym] : "myKey1",
    age : 18,
    email : "gauravkumar123@gmail.com",
    location : "Aligarh",
    IsloggedIn : false,
    lastloginDays : ["monday", "saturday"]  

}

//console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log( JsUser[mySym]);

JsUser.email = "shinunishad123@gmail.com"
//console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email = "shinunishad125@gmail.com"
console.log(JsUser.email);

//JsUser.greeting = function {
//     console.log("Hello Js User");
    
// }

// console.log(JsUser.greeting());


JsUser.greeting = function() {
    console.log("Hello Js User");
}


JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
    console.log(`Hello Js User, ${this.name},${this.email}`);
    console.log(`Hello Js User, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
