// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumSqu(x) {
  var sum = 0;
  for (var i = 0; i <= x; i++) {
    sum += Math.pow(i,2)
  };
  return sum;
}

function squSum(x) {
  var sum = 0;
  for (var i = 0; i <= x; i++) {
    sum += i;
  };
  return Math.pow(sum,2);
}

console.log(squSum(100)-sumSqu(100))
