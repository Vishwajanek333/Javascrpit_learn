let score="33"
// "33"=>33
//"33abc"=>nan
// true =>1;false =>0
console.log(typeof score);
console.log(typeof (score));// it  will either  number without double codes, if double its string

let valueInNumber = Number(score)// its typecasting
console.log(typeof valueInNumber);// string to int or number
console.log(valueInNumber); // print the number

let isLoggedIn=23

let StringIsloggedIn =String(isLoggedIn)
console.log(StringIsloggedIn );
console.log(typeof  StringIsloggedIn);// type of check the value its string or number or so many

let islog=1
let booleanIslogIn =Boolean(islog)
console.log(booleanIslogIn);
// 1 => true ; 0=>false
//""=>false
//"hitesh"=>true