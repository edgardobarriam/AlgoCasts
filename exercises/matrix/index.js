// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const maxNum = n * n;

  const matrixArray = Array(n).fill(0);
  for (let a = 0; a < n; a++) { matrixArray[a] = Array(n).fill(0); }

  let coordinates = { x: 0, y: 0 };
  let direction = 'RIGHT';

  for (let i = 1; i <= maxNum; i++) {
    matrixArray[coordinates.x][coordinates.y] = i;
    direction = calcDirection(matrixArray, coordinates, direction);
    coordinates = calcNextCoordinates(coordinates, direction);
  }

  console.log(matrixArray);
  return matrixArray;
}

function calcDirection(matrixArray, coordinates, direction) {

  // If I'm going right and what's next to me is out of bounds or already defined...
  if (direction == 'RIGHT' && (matrixArray[coordinates.x][coordinates.y + 1] === undefined || matrixArray[coordinates.x][coordinates.y + 1] != 0)) {
    return 'DOWN';
  }

  // If I'm going down and what's below me is out of bounds or already defined...
  if (direction == 'DOWN' && (matrixArray[coordinates.x + 1] === undefined || matrixArray[coordinates.x + 1][coordinates.y] != 0)) {
    return 'LEFT';
  }

  // If I'm going left and what's at my left is out of bounds or already defined...
  if (direction == 'LEFT' && (matrixArray[coordinates.x][coordinates.y - 1] === undefined || matrixArray[coordinates.x][coordinates.y - 1] != 0)) {
    return 'UP';
  }

  // If I'm going up and what's above me is out of bounds or already defined...
  if (direction == 'UP' && (matrixArray[coordinates.x - 1] === undefined || matrixArray[coordinates.x - 1][coordinates.y] != 0)) {
    return 'RIGHT';
  }

  return direction;
}

function calcNextCoordinates(coordinates, direction) {
  if (direction === 'RIGHT') {
    coordinates.y++;
  }

  if (direction === 'DOWN') {
    coordinates.x++;
  }

  if (direction === 'LEFT') {
    coordinates.y--;
  }

  if (direction === 'UP') {
    coordinates.x--;
  }

  return coordinates;
}

module.exports = matrix;
