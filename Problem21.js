var generator = function(x) {
  object1 = {};
  for (var i = 1; i < x; i++) {
    arr = [0];
    for (var j = 1; j <= i/2; j++) {
      if (i % j === 0) {
        arr.push(j)
      }
    }
    sum = arr.reduce(function(a,b) {
      return a+b
    })
    object1[i] = sum
  }
  return object1
}

var amica = function(x) {
  var sum = 0;
  for (var i in x) {
    for (var j in x) {
      if (i != j) {
        if (x[i] == j && x[j] == i) {
          sum += x[i];
        }
      }
    }
  }
  return sum
}


console.log(amica(generator(10000)))
