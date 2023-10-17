// Generate Fibonacci sequence.
// Return the sequence as an array.
// Return the sequence as a string, with the values separated by commas.
// Return the sum of the sequence.

// Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  var output = [];
  if (n === 1) {
    output = [1];
  } else if (n === 2) {
    output = [1, 1];
  } else {
    output = [1, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
  //Return an array of fibonacci numbers starting from 1.
  //Do NOT change any of the code below 👇
}
console.log(fibonacciGenerator(1));
console.log(fibonacciGenerator(2));
console.log(fibonacciGenerator(3));
console.log(fibonacciGenerator(4));
console.log(fibonacciGenerator(5));
console.log(fibonacciGenerator(6));
console.log(fibonacciGenerator(7));
console.log(fibonacciGenerator(8));
console.log(fibonacciGenerator(9));
console.log(fibonacciGenerator(10));
