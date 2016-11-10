// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid?

var lattice = function(x) {
  var square = [];
  for (var i = 0; i <= x; i++) {
    square.push([])
    for (var j = 0; j <= x; j++) {
      if (i === 0 || j === 0) {
        square[i].push(1);
      } else {
        square[i].push(square[i][j-1]+square[i-1][j])
      }
    }
  }
 return square[x][x];
}

console.log(lattice(20))
