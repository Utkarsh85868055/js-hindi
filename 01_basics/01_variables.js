const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountpassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountpassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);

/*
Prefer not to use var 
because os issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity])

