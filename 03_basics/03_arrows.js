const user ={
    username:"vishwa",
    price:999,

    welcomeMessage: function(){// "this" key word reprent the  currentcontext of explain it.
        console.log(`${this.username},welcome to website`);
            console.log(this)// it provide the  context or values in this current object of both or any number of user
    }
}
user.welcomeMessage()
user.username="alex"// cuurent context change
user.welcomeMessage()
//console.log(this)// its  have global object is {}


function chai(){ // if given vari=fn chai()
    let username ="vishwa"
    //console.log(this);// if this only in fn it will all information of like global ,cleartimout,settimout many more
    console.log(this.username);// you get undefined bcz it this mostly  work on objects not on fn.
}
chai()

 ///+++arrow fn+++
 console.log("///////");

 const chai1 =  ()=>{
    let username="vishwa"
    console.log(this)// here its this {} bcz its node js  modules (module scope) is in top level

 }
 chai1()
//  Why does it print {} (in Node) or window (in browser)?
// When the arrow function is created inside obj, its surrounding scope is not the object, but the file/module/global scope.

// In Node.js modules, the top-level this is {} (module scope).

// In browsers, the top-level this is window.

// So the arrow function borrows this from that outer scope, NOT from obj.


// arrow  function: two wayof  arrow fn
 const addTwo=(num1,num2)=>{
    return num1 + num2
 }
 console.log(addTwo(3,4))

 // b-implicate  here and no return to write
 const addTwo1 = (num1,num2)=>(num1+num2)// perietence is imp
 console.log(addTwo(5,4))

 const addTwo2=(num1,num2)=>({username:"vishwa"}) //
console.log(addTwo2(3,4))


