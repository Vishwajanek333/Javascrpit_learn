const myNumers =[1,2,3,4,5,6,7,8,9,10]
const newNumers =myNumers.map(( num)=>{ return num+10})
console.log(newNumers); // adding to any to  present array use of map add

// chaing method  it you can  use two or more methods like map().map().filter()

const newNums =myNumers
               .map((num)=> num*10)
               .map((num)=> num +1)
               .filter((num)=> num>=40)

console.log(newNums);


