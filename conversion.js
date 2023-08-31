let score = 33;
console.log(typeof(score));  // number

score = "33";
console.log(score);  // 33
console.log(typeof score);  // string

let scoreInNumber = Number(score);
console.log(scoreInNumber);
console.log(typeof scoreInNumber);

score = "33abc"

scoreInNumber = Number(score);
console.log(scoreInNumber); //NaN
console.log(typeof scoreInNumber); //number

console.log(Number(NaN)); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(null));  //0

//  to Number
// "33" => 33
//  "33abc" => NaN
// "true" => 1 false => 0 

// to Boolean
// "" => false
// "abc" => true
// 1 => true;
// 0 => false