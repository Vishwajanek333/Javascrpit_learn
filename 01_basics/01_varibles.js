const accountId =12342
let accountEmail="vishwaj@google.com"// it change it is recommeded
var accountPassword ='123'// it can be change but not recommeded
let accountState
accountCity="banagalore"

// const is not going to change 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);