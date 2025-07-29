// for of mostly for array

// ["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const nums of arr){
    console.log(nums);

}
const greetings = "hello World!"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}

//maps : unique values

const map =new Map()
map.set ('IN',"INDIA")
map.set ('usa',"usa")
map.set ('fr',"france")
map.set('IN',"INDIA")

console.log(map);

for(const key of map){// for of loop the print  we get the values of of the array
    console.log(key,':-',value);
}
// objects  general not iterate
const myObject ={
    'game1':'NFS'
}


