const myNums=[1,2,3]
// const myTotal =myNums.reduce(function(acculamator,currentvalue){
//     console.log(`acc:${acculamator} and currentvalue:${currentvalue}`);
//     return acculamator+currentvalue
// },0)// here  we wil provide the intial value  its acculmulaotor  take the intial value from goes on adding .

// console.log(myTotal);

const myTotal =myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const shoppingCart=[{
    itemName:"py course",
    price:999
},
  { itemName:"jscourse",
    price:1999
},
{ itemName:"vmcourse",
    price:2999
},
{ itemName:"c++course",
    price:"3999"
},

]


const priceToPay=  shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)// it only  for number price



