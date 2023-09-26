// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// The reson is that an equality check ==  and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false. </>

console.log(undefined ==0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);

console.log("================");

console.log("2"===2);       // checks datatype as well

// avoid above comparisions to write clean code
