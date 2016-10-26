// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

function isPrime(x) {
  for (var i = 2; i <= x/2; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return x > 1;
}

console.log("This program takes ~5 minutes to run - hang tight!")
function primeSum(x) {
  var sum = 2;
  for(var i = 1; i<x; i+=2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(primeSum(2000000))
