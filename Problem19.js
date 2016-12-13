// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var sundays = function (x,y) {
  var months = [31,28,31,30,31,30,31,31,30,31,30,31];
  var sundayCount = 0;
  var year = x;
  x = 1900;
  var day = 2;
  while (x <= y) {
    if (x % 4 == 0) {
      months[1] = 29;
    } else {
      months[1] = 28;
    }
    for (var i = 0; i < 12; i++) {
      for (var j = 1; j <= months[i]; j++) {
        if (day === 1 && j === 1 && x >= year) {
          sundayCount++;
        }
        if (day === 7) {
          day = 1
        } else {
          day++
        }
      }
    }
    x++;
  }
  return sundayCount;
}

console.log(sundays(1901,2000))
