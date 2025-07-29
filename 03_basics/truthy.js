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