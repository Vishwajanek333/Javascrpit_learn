

function saymyname(){
    
    console.log("v");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("w");
    console.log("a");

}
saymyname()//

function addTwoNumber(n1,n2){// "parameters" will making in defination of function 
    console.log(n1+n2);
}
addTwoNumber(4,5)// passing  values is "arugements" while in calling
addTwoNumber(4,"5")// it concate it in js


function addTwoNumber1(n1,n2){// "parameters" will making in defination of function 
    // let result=(n1+n2);
    // return  result
    return n1+n2// this possible
    // if any thing printed below the return not going to execute
}
const result=addTwoNumber1(3,4)
console.log("result:",result);

   


//  use of condition use of js
function loginUserMessage(username){
   if(!username){      // if(username === undefined){
        console.log("please enter a usename");
        return
    }
    return ` ${username} just logged in`

}
//console.log(loginUserMessage("vishwa"))
console.log(loginUserMessage())

// use case of operators multi value to same variable

function  calculatecartPrice(...num1){// (...)is rest  or speard operator
    return num1
}
console.log(calculatecartPrice(200,300,400,20000))





// objects and use of  fucntions 

const user={
    username :"hitesh",
    prices :199
}
function handleObject(anyobject){// u can pass any name no rule
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)
}
//handleObject(user)// here u  must be should pass the argument of original name of object.
handleObject({
    username:"sam",
    //price: 499// always remember we should pass the correct  object names or check before using.
prices:499
})

   




// handels the array in function
//const mynewArray =[200,400,100,600]
function returnSecondValue(getArray){// any name in parameter
    return getArray[1]// bcz indx 0,1,2,..
}
//console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200,467,555,1000]))