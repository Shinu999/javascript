   // forOf ==>  suitabale for array 
//    forof
const myArray = [2,4,5,6,7,8,9]

for (const i of myArray) {
    // console.log(i);
    
}

const heros = ["ironman", "superman", "flash"]

for (const i of heros) {
    // console.log(i);
    
}


const greetings = "HELLO WORLD"

for (const greet of greetings) {
    // console.log(greet);
    
}

const map = new Map ()
map.set ("IN", "India")
map.set ("Fr", "France") 
map.set ("A", "America")
map.set ("J", "Japan")
map.set ("AF", "South Afrika")
// console.log(map);

for (const [key,value] of map) {

    console.log(key,"=", value);
    
    
}
