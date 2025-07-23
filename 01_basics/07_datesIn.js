let myDate = new Date()// data is object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate =new Date(2023,0,23)
let myCreatedDate1 =new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
console.log(myCreatedDate1.toLocaleString());//1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp =Date.now()// its mainly used for like polls like things(in whatsapp).
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//returns the number of milliseconds since January 1, 1970 
console.log(Math.floor(Date.now()/1000));// it conver to  present date into  seconds.


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);// 1 bcs its your 
console.log(newDate.getDay());// is 3 bcz its started from mon ,tue, wed today

// `${newDate.getDay()}and the time`

newDate.toLocaleDateString('default',{
    weekday:"long",
})


