// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function bigDiv(x) {
  var num = x;
  var counter = 0;

  while (counter < x) {
    counter = 0;
    for (var i = 1; i<=x; i++) {
      if (num%i===0) {
        counter ++;
      } else {
        num += x;
      }
    }
  }
  return num;
}

console.log(bigDiv(20))
