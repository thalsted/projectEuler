// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPal(x) {
  x = x.toString();
  var y = x.split('');
  y = y.reverse();
  y = y.join('');
  return x===y;
}

var lar = 0;

for (var i = 100; i < 1000; i++) {
  for (var z = i; z < 1000; z++) {
    if (isPal(z*i)) {
      if (z*i>lar) {
        lar = z*i;
      }
    }
  }
}

console.log(lar)
