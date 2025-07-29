// // for
// for (let i = 0; i<=10; i++) {
//     const element = i;
//     console.log(element);    
// }   
//  console.log(element);

//  // 2nd
//  for (let i = 0; i<=10; i++) {
//     const element = i;
//     if(element == 5){
//     console.log("5 is best number");    
// }   
//  console.log(element);
// }

// //3rd
//  for (let i = 0; i<=10; i++) {
//     console.log(`element ${i}`);

// for(let j=0;j<=10;j++){
//     // console.log(`inner loop value`);
//     console.log(i +'*'+j+'='+i*j);
// }    

// }   

// array 4rd
let myArray =["flash","batman","superman"]

for(let index =0;index<myArray.length; index++){
    const element =myArray[index];
    console.log(element);
}

// break and continue
for (let index = 1; index <=20; index++) {
    if(index == 5){
    console.log("detected 5");
    break}// stop
    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if(index == 5){
    console.log("detected 5");
    continue}// skip
    console.log(`value of i is ${index}`);
    
}
