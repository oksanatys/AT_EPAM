//Perform addition of various types (string + boolean, string + number, number + boolean)
console.log ("Hello" + " " + true);
console.log ("Hello" + ", " + 123);
console.log (10 + false);

//Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log ("Hello" * false);
console.log ("Hello" * 2);
console.log (5 * false);

//Divide different types (string / boolean, string / number, number / Boolean)
console.log ("Hello" / true);
console.log ("Hello" / 2);
console.log (5 /true);

//Perform explicit conversion (number, string, boolean)
let str1 = 50;
let num = parseInt(str1);
console.log (num);

let num2 = 100;
let str2 = num2.toString();
console.log(str2);

let str3 = "false";
let bool = Boolean(str3);
console.log(bool);
