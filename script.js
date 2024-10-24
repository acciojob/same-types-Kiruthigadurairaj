function isSameType(value1, value2) {
  //your js code here
	if (isNaN(value1) && isNaN(value2)) {
    return true;
  }

  // Check if both values have the same type
  return typeof value1 === typeof value2;
}


console.log(isSameType(1, 3));         // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));     // true
console.log(isSameType("3", 3));
       

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
value1 = isNaN(value1) ? value1 : Number(value1);
value2 = isNaN(value2) ? value2 : Number(value2);
alert(isSameType(value1, value2));

