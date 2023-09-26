const accountId=14455;                  // value can't modified
let accountEmail="vaibhav@google.com"
var accountPassword="vaibhav@123"
accountCity="Nagpur"

// ctrl + / 
// accountId=2          // modification not allowed 

accountEmail="vt@vt.com"
accountPassword="12345"
accountCity="Pune"

let accountState;       // undefined value : not defined any value
console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope {...} and functional scope ()
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// scope problems with var so prefer to use let :   { ----scope---  }