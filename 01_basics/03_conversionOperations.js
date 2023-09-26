/* Number conversions */
let score="vaibhav"     //try to pass  'number string null undefined boolean' values 

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/* 
    "33" => 33
    "33abc" => NaN (Not a Number)
    true  =>1; false =>0
    null => 0
    undefined => NaN
    string => NaN

*/

/* Boolean conversions */
let isLoggedIn=33

let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/* 
    1 => true;  0 => false 
    "" => false
    "vaibhav" => true
    null => false
    undefined => false
    33 => true

*/

/* String conversions */
let someNumber = "vaibhav"

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/* 
    33 => 33
    null => null
    undefined => undefined
    true => true
    false => false
    string => string


*/
