// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function isPrime(x) {
  for (var i = 2; i <= x/2; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return x > 1;
}

function nthPrime(n) {
  var counter = 1;
  var test = 1;
  while (counter != n) {
    test += 2;
    if (isPrime(test)) {
      counter ++;
    }
  }
  return test;
}

console.log(nthPrime(10001))
