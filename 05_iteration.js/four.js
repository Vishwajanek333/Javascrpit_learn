//  for in loop used for objects
const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"}


    for (const key in myObject) {
        console.log(key);// store only key values
        console.log(myObject[key]);// store only  reference values
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }

    const programming =["js","rb","py","java","cpp"]

    for(const key in programming ){
        console.log(key);// in for in  loop  we get the   key values
        console.log(programming[key]);// get key and value
    }
