// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const baseSize = 1 + (2 * (n-1));

  for (let i = 0; i < n; i++) {
    const numBlocks = 1 + (i*2);
    const padding = baseSize - numBlocks;

    let blocks = "";
    for (let j = 0; j < numBlocks; j++) {
      blocks += "#";
    }

    const line = blocks.padStart(numBlocks + padding/2 , ' ').padEnd(baseSize, ' ');
    console.log(line);
  }
}

module.exports = pyramid;
