const userEmail ="V@vishwa.ai"// " " its print eslse// [] its true

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont  string")
}

// falsy values
// false,0,-0,bigInt 0n,"",null,undefined,NaN 

// // truty values  reamiang and also some
//  truty valuesare= "0",'fasle',[],{},functions(){}

if(userEmail.length === 0){
    console.log("array is empty");
}


const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty"); 
}

//  remainder in run brower console
// false==0
// true
// false==''
// true
// 0=='
// true'

//nullish coalescing operator(??):null undefined
 // call back and handels the error 
let val1
// val1=5??10
val2 =null??10// it handle complex values to handles
// val1 =undefined ?? 10
val1 =null?? 10?? 20 
console.log(val1);
console.log(val2);

// terinary operator
 // condition  ?true :false

 const icePrice =100
 icePrice<=80?console.log("less than 80"):console.log("more than 80")