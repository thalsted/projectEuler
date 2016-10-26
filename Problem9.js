// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function finder(n) {
  for (var x = 1; x<n; x++) {
    for (var i = 1; i<x; i++) {
      for (var z = 1; z<i; z++) {
        if (z*z + i*i === x*x) {
          if (z + i + x === n){
            return z+' x '+i+' x '+x+' = '+z*i*x;
          }
        }
      }
    }
  }
}

console.log(finder(1000))
