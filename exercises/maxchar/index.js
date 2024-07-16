// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countObject = str.split("").reduce((map, char) => {
    map[char] = map[char]++ || 1;
    return map;
  }, {});

  let max = 0;
  let maxChar;

  for (const char in countObject) {
      const count = countObject[char];
      if (count > max) {
        max = count;
        maxChar = char;
      }
  }

  return maxChar;
}

module.exports = maxChar;
