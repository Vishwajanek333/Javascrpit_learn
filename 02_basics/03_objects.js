//singleton


//object literals
//Object.create
const mySymbol=Symbol("key1")

const jsUser ={
    name:"vishwa",
    "full name":"vishwa janek",
    [mySymbol]:"key1",// symbol syntax format
    age:21,
    location:"bangalore",
    Email:"vishwa@google.com",
    isLoggedIn: false,
    lastLoginDay:["Monday","saturday"]
}

//access the elements
console.log(jsUser.Email);//1
console.log(jsUser["Email"]);//2.1&2 both same acess the value
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);

jsUser.Email ="vishwachatgpt.com"//its change the value
//Object.freeze(jsUser)// it will lock or freez all the values  not going make any new change
//jsUser.Email="vishw.micrsoft.com"
console.log(jsUser);


//functions
jsUser.greeting = function(){
    console.log("hello js user");
}
 jsUser.greetingtwo = function(){
     console.log(`hello js user,${this.Email}`)// it "this"for reference the same object in that provide the properties
 }
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
