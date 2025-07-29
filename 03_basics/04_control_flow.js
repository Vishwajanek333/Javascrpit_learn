//if(condition)
if(true){ // its exceute 

}

const isUserLoggedIn = true

if(isUserLoggedIn){

}
// <,>,<=.==.!=,=== it check type and ,!== its strict check

const temperature =41

if( temperature === 41){
    console.log("less than 50");
}else{
    console.log("grater than 50")
} 
console.log("temp is  still more")

/// short hand notion
//  if(balance>500) console.log("test");// it implicate scope it execute in single line



// nested if

// const balance =1200
// if(balance<500)
// { console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 850")
// } else{
//     console.log( " more ")
// }

const isUserLoggedIn1=true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true
if(isUserLoggedIn1 && debitCard&&2==3){
    console.log("allow to buy course")
}
if(loggedInFromEmail|| loggedInFromGoogle){
    console.log("user logged in")
}