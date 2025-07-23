// arrays

const myarr=[1,2,3,4]
const myheors =["batman","spiderman","commonman"]

const myarr2=new Array(1,2,3,4)
console.log(myarr[1]);

// array methods

myarr.push(6)
myarr.push(7)
console.log(myarr);

myarr.pop()
console.log(myarr);    

myarr.unshift(9)// add ele in first place
//myarr.shift()// it remove first element
console.log(myarr);

console.log(myarr.includes(9));// check it give true or false
console.log(myarr.indexOf(3));

const newArr =myarr.join()

console.log(myarr);
console.log(newArr);// strings

// slice ,splice

console.log("A",myarr);

const  myn1 =myarr.slice(1,3)// slice  it not include the last value
console.log(myn1);//[ 1, 2 ]
console.log("B",myarr);

const myn2 = myarr.splice(1,3)// splice which includes the last valure
console.log(myn2);//[ 1, 2, 3 ]
console.log("C",myarr);
// get more methods in  mdn string methods.








     
