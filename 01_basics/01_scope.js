 let a = 50
const b = 60
// var c = 40
if(true){
    let a = 10
    const b = 20 
    var c = 30
    // console.log("Inner:", a);
    // console.log("inner :", b);

    
    
}

// console.log("outer :", a);
// console.log("outer :", b);
// console.log(c);

function one() {
       const username = "Gaurav "

      function two (){
         const website ="youtube"
        // 
        console.log(username);
      }
      console.log(website);
      two()
      
      

}

 one()