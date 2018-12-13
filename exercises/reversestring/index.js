// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str
      .split('')
      .reverse()
      .join('');
}

function reverseAlt(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function helperReverse(str) {
  return str.split('').reduce((rev, char) => { char + rev }, '');
}

function myReverse(str) {
  let revStr = [];
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      revStr[left] = str[right];
      revStr[right] = str[left];

      left++;
      right--;
  }

  return revStr.join('');
}

module.exports = reverse;