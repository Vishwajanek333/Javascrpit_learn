const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)//   complete dc heros arrays as  consider as  one element 
//console.log(marvel_heros) 
//console.log(marvel_heros[3][1]);

// const allheros=marvel_heros.concat(dc_heros) // it will new array but if we push it will push all elements to same as first
// console.log(allheros);

// instead of concat we can use spread most in js

const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vishwa"))
console.log(Array.from("vishwa"))// it will convert string/object  to array
console.log(Array.from({name:"vishwa"}))// its obj to say which one should convert, other wise it provide empty  it's import

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));// it convert to set elemts to array 
