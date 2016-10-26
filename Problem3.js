// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(x) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return x > 1;
}

var larg = 0;

function check(z) {
  for (var i = 1; i <= Math.sqrt(z); i+=2) {
    if (z%i === 0) {
      if (isPrime(i)) {
        larg = i;
      }
    }
  }
  return larg;
}

console.log(check(600851475143));
