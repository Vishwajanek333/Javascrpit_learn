const score=400// math is bulit in object

const balance = new Number(100)
console.log(balance)

console.log(balance.toString());// conv to num  to string
console.log(balance.toString().length);// len of str
console.log(balance.toFixed(2));// it 100.00// its precision it most used to ecomerce

const otherNumber =123.8966

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));// toLocal is form of stringto your language and region.
// Output:1.000.000,00 €


// max,min directly attached to datatype of any value ex
console.log(Number.MAX_SAFE_INTEGER); //simalr all"."

//++++++++++++++++Maths+++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(6.7));
console.log(Math.sqrt(5,8));
console.log(Math.max(5,6,8,9));

console.log(Math.random());// the value 0 to 1 btw value u get.

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
const min =10
const max = 20

console.log(Math.floor(Math.random()*(max -min + 1))+min)