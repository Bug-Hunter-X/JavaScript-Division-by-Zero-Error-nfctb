function myFunction(a, b) {
  if (b === 0) {
    return Infinity; // Or handle the error in a more appropriate way, for example by throwing an exception: throw new Error('Division by zero');
  } 
  return a / b;
}
console.log(myFunction(10, 0)); // This will return Infinity
console.log(myFunction(10,2)); // this will return 5