 // primtive
// 7types :String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100 // js is scrpited, dynamic type of language and it run client side +server side.
const scoreValue =100.3

const isLoggedIn =false
const anotherId= Symbol('123')
const id=123
console.log(id === anotherId);// just for check 

const bigNumber =343333534348239n



/// reference (non primitive)

// Array,objects,functions
const colours=["red","blue","green"];
let myObj={
    name:"vish",
    age:21,

}
const myFunction = function(){
    console.log("hello");
}
 console.log(typeof variables_name) // it  tells about the type of variable


 //  +++++++++++++++++++++++++++++++++++++++
 // primtive (stack): which is make copy of variable of same type.
 //non primtive(heap):which is mainly reference the value directly.

 // 1 stack
 let myname="vishwa"

 let anotherName = myname
 anotherName = "manu"

 console.log(myname);
 console.log(anotherName);

 let userOne={// objects is key and value pair
    email:"user@google.com",
    upi:"usr@ybl"
 }
 let userTwo =userOne
userTwo.email ="vish@google.com"
console.log(userOne.email);
console.log(userTwo.email);
 
