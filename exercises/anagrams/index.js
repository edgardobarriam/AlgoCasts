// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 * 
 * @param {string} stringA 
 * @param {string} stringB 
 * @returns {boolean}
 */
function anagrams(stringA, stringB) {
  const countA = countChars(stringA.toLowerCase());
  const countB = countChars(stringB.toLowerCase());

  for (const char in countA) {
    const a = countA[char];
    const b = countB[char];
    if (a != b) {
      return false;
    }
  }

  for (const char in countB) {
    const a = countA[char];
    const b = countB[char];
    if (a != b) {
      return false;
    }
  }

  return true;
}

/**
 * 
 * @param {string} str 
 * @returns {object}
 */
function countChars(str) {
  const excludedCharacters = [' ', ',', '.', '!', '?'];
  return str.split("").filter((char) => !excludedCharacters.includes(char)).reduce((map, char) => {
    map[char] = map[char]++ || 1;
    return map;
  }, {});
}

module.exports = anagrams;
