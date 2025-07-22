let score="33"
// "33"=>33
//"33abc"=>nan
// true =>1;false =>0
//console.log(typeof score);
console.log(typeof (score));// it  will either  number without double codes, if double its string

let valueInNumber = Number(score)// its typecasting
// console.log(typeof valueInNumber);// string to int or number
console.log(valueInNumber); // print the number

let isLoggedIn=23

let StringIsloggedIn =String(isLoggedIn)
// console.log(StringIsloggedIn );
console.log(typeof  StringIsloggedIn);// type of check the value its string or number or so many

let islog=1
let booleanIslogIn =Boolean(islog)
console.log(booleanIslogIn);
// 1 => true ; 0=>false
//""=>false
//"hitesh"=>true

//*************************operations************************ */
let value =3
let negvalue= -value
// console.log(negvalue);
// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2-2);
// console.log(2%2);

let str1 ="hello"
let str2=" vish"
let str3=str1+str2
console.log(str3);
console.log ("1"+2);// it converstion as ecma link 

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
