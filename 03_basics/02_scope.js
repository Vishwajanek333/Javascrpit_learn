
// scope  main see in for loops , if else condition  etc so many
// scope  use based  on global and block or local

if(true){
    let a=3
    var b=8
    const c=5 
    console.log(c)
}
//console.log(a)
console.log(b)
//console.log(c)

// for(let i=0;i<Array.length;i++){
//     const element =array[i]
// }

//scope  is running in node in local and but scope is differnt in console in goole inspect

function one(){// here  child can access the parent but parent not access the  child
    const username ="vishwa"// parent

    function two(){// child
        const website ="youtube"
        console.log(username);// here the  outside  value can access in  functional scope but inside value not 
    }
    // console.log(website);
    two()// it  excute and print only inside the two function

}
one()// if  you excute only outer function  only it nothing is printed


/// similar to if and else condition same concept of scope
if(true){
    const username ="vishwa"
    if(username==="vishwa"){
        const website ="youtube"
        console.log(username + website);
    }
    // console.log(website);

}
// console.log(username);

//++++++++++++++++ interesting +++++++++++
 // functions two techinques in js 
 console.log(addone(5)) // hosting  :if we its accessed directly with fun call
 function addone(num){
    return num + 1
 }
//  console.log(addone(5))

 //2
//  console.log(addTwo(5))// hosting  concept :here its not accessiable bcz its varible not accessible before the executing.
 const addTwo=function(num){
    return num+2
 }
console.log(addTwo(5))


