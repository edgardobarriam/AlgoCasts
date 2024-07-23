// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * 
 * @param {string} str 
 */
function capitalize(str) {
  return str.split(" ").reduce((acum, substr) => acum + substr.charAt(0).toUpperCase() + (substr.substring(1)) + " ", "").substring(0, str.length);
}

module.exports = capitalize;
