// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

var nums = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred"
}

var numberer = function(x) {
  x = x.toString();
  var ans = 0;
  if (x.length === 4) {
    ans = 11;
  } else {
    if (x.length === 3) {
      ans += (nums[x[0]].length + nums[100].length);
      if (x.slice(-2) != "00") {
        ans += 3;
      }
    }
    if (x.length >= 2 && Number(x.slice(-2)) > 19) {
      var y = x.slice(-2).slice(0,1) + "0";
      ans += (nums[y].length);
      if (x.slice(-1) != "0") {
        ans += nums[x.slice(-1)].length;
      }
    } else if (x.slice(-2) != "00") {
      ans += nums[Number(x.slice(-2))].length;
    }
  }
  return ans;
}

var summer = function(x) {
  var total = 0;
  for (var i = 1; i <= x; i++) {
    total += numberer(i)
  }
  return total;
}

console.log(summer(1000))
