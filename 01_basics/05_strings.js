const name ="vishwa"
const repoCount =6

// sting-inter-polataion : string  is injecting in middle of stirng
// use for string =`` using this most of it.
//console.log(`hello my name is ${ name } and my repo count is :${repoCount}`);


// declare other  way of string
const gameName =new String('hiteshic')//  best understanding go to  google console and  types sting u get know all things of string
 console.log(gameName[0]);// access the value key:value
 //console.log(gameName.__prot__);// prottype 

 // methods
 console.log(gameName.length);// find len is 8
 console.log(gameName.toUpperCase());
 console.log(gameName.indexOf('t')); // it tell about postion
 console.log(gameName.charAt(3));  //based on post of char


 // to learn more about  strings methods
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


const newString =gameName.substring(0,4) // reverse is not possible
 console.log(newString);

 const anotherString =gameName.slice(-8,4) // it have reverse is possible 
console.log(newString);

const newStringOne =" vishwa  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://vish.com/vish%20janek"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))// it just checks its or not.

const newStringTwo ="mon-tue-wed"
console.log(newStringTwo.split('-'));// string to array