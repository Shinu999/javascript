// ================== first code =================
//  myFun()

// var myFun = function() {
//     console.log("first");  
// }

// myFun();

// function myFun (){
//     console.log("second");   
// }

// myFun()
 
// =================== secons code ==========

// var variable = 10;

// (() => {
//    console.log(variable);
    
//    variable = 20;

//    console.log(variable);
   
   
// })();

// console.log(variable);


// var variable =30;

// console.log(variable);

// =============== third code =============

// foo = 10 ;
 
// console.log(" foo :", foo);

// var foo =30 ;

// console.log(" foo :", foo);
//  ================= fourth code ==============

// variable = 10;

// (()=>{
//     foo = 100 ;
//     console.log(variable);
//     var foo = 200; 
//     var variable =20;
//     console.log(variable);

// }) ();

// // console.log(foo); foo is not difine
// console.log(variable);

// ==================== fifth code ==================

// for (var i = 0; i < 10; i++) {
//     setTimeout (()=> console.log(i),0);
    
// }
// =================six code ===================

// const gaurav = {
//     name : " gaurav kumar",
//     sayName : function(){
//         console.log(this.name);   
//     }
// }

// const aryan = {
//     name : " aryan kumar",
//     sayName : function(){
//         console.log(this.name);   
//     }
// }
// gaurav.sayName(aryan)
// gaurav.sayName.call(aryan)

// function sayMyName (){
//     console.log(this.name);
    
// }


// sayMyName.call(aryan)

// ================= seven code ==============

// const gaurav = {
//     name : " gaurav kumar",
//     sayName : function(){
//         console.log(this.name);   
//     },
// }

// setTimeout (gaurav.sayName.bind(gaurav),3*1000)

// ============== eigth  ===============

const obj =Object.create( { 
    hieght : 30 
})
 
console.log(obj.hieght);

delete obj.hieght;        // on prototype delete is not working object is a prototype

console.log(obj.hieght);

