const myNums =[1,2,3,4,5,6,7,8,9,10]

const newmyNums=myNums.filter((num)=> num > 4)// filter have two-points one callbackfn ,conditon.
console.log(newmyNums);

const newmyNums1=myNums.filter((num)=> {
    return num>4
})


const books=[
    { title:'book one',genre:'fiction',publish:1981,edition:2004 },
     { title:'book two',genre:'science',publish:1982,edition:2005},
     { title:'book three',genre:'history',publish:1983,edition:2006},
     { title:'book four',genre:'fiction',publish:1984,edition:2007}
];

let userBooks = books.filter((bk)=> bk.genre === 'fiction')
console.log(userBooks);

console.log("///////////////////////");

userBooks = books.filter((bk)=>
     { 
      return bk.edition>2004 &&  bk.genre==='history'
    })
console.log(userBooks);


