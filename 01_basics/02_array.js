const marvel_Heros = ["Ironman", "spiderman", "hulk" ]
const dc_Heros = ['superman', "flash", "batman"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);
// console.log(marvel_Heros[3][0]);


// const allHeros = marvel_Heros.concat(dc_Heros) 
// console.log(allHeros [3]);

// const all_new_heros = [...marvel_Heros, ...dc_Heros]
// console.log(all_new_heros [4]);

const another_array = [1,2,3,4,5, [4,3,6,5,[4,5,8,7,6]],5,6,3,[4,5,3,4,]]

const new_another_array = another_array.flat(Infinity)
console.log(new_another_array [5]);

console.log(Array.isArray("Gaurav"));
console.log(Array.from("Gaurav"));
console.log(Array.from("Gaurav"[3]));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

