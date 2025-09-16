function getStringLength(value) {
  if (typeof value !== 'string') return 0;
  return value.length;
}

function isString(value) {
  let result = 0;
  if (typeof value === 'string' || value instanceof String) {
    result = true;
  } else result = false;
  return result;
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  if (times < 0) return '';
  return str.repeat(times);
}

function removeFirstOccurrences(str, value) {
  if (!str.includes(value)) return str;
  const index = str.indexOf(value);
  const valueLength = value.length;
  return `${str.slice(0, index)}${str.slice(index + valueLength)}`;
}

function removeLastOccurrences(str, value) {
  if (!str.includes(value)) return str;
  const index = str.lastIndexOf(value);
  const valueLength = value.length;
  return `${str.slice(0, index)}${str.slice(index + valueLength)}`;
}

function sumOfCodes(str) {
  if (str === undefined || str === null) return 0;
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

function formatTime(minutes, seconds) {
  const normalizedMinutes = String(Math.abs(minutes));
  const normalizedSeconds = String(Math.abs(seconds));
  const finalMins = normalizedMinutes.padStart(2, '0');
  const finalSecs = normalizedSeconds.padStart(2, '0');
  return `${finalMins}:${finalSecs}`;
}

function reverseString(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }
  return result;
}

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  let counter = 0;
  let i = 0;
  const normalizedStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  while (i < normalizedStr.length) {
    if (vowels.includes(normalizedStr[i])) {
      counter += 1;
    }
    i += 1;
  }
  return counter;
}

function isPalindrome(str) {
  const normalizedStr = str
    .toLowerCase()
    .replaceAll(' ', '')
    .replaceAll(/[?!,]/g, '');
  const splitStr = normalizedStr.split('');
  const reversedSplitStr = splitStr.reverse().join('');
  return reversedSplitStr === normalizedStr;
}

function findLongestWord(sentence) {
  const sentenceArray = sentence.split(' ');
  let longest = sentenceArray[0];
  for (let i = 0; i < sentenceArray.length; i += 1) {
    if (longest.length < sentenceArray[i].length) {
      longest = sentenceArray[i];
    }
  }
  return longest;
}

function reverseWords(str) {
  const strArray = str.split(' ');
  const result = [];
  for (let i = 0; i < strArray.length; i += 1) {
    result.push(strArray[i].split('').reverse().join(''));
  }
  return result.join(' ');
}

function invertCase(str) {
  let result = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str[index].toUpperCase() === str[index]) {
      result += `${str[index].toLowerCase()}`;
    } else if (str[index].toLowerCase() === str[index]) {
      result += `${str[index].toUpperCase()}`;
    }
  }
  return result;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  const result = value.replace(/Hello, /g, '').replace(/!/g, '');
  return result;
}

function unbracketTag(str) {
  return str.replace(/</g, '').replace(/>/g, '');
}

function extractEmails(str) {
  const result = str.split(';');
  return result;
}

function encodeToRot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      result += str[i];
    }
  }
  return result;
}

function getCardId(value) {
  const rank = value.slice(0, -1);
  const suit = value.slice(-1);
  let suitMult;
  switch (suit) {
    case '♣':
      suitMult = 0;
      break;
    case '♦':
      suitMult = 13;
      break;
    case '♥':
      suitMult = 26;
      break;
    case '♠':
      suitMult = 39;
      break;
    default:
      throw new Error('Not implemented');
  }

  let unnumberValues;
  if (rank === 'A') {
    unnumberValues = 1;
  } else if (rank === 'J') {
    unnumberValues = 11;
  } else if (rank === 'Q') {
    unnumberValues = 12;
  } else if (rank === 'K') {
    unnumberValues = 13;
  } else {
    unnumberValues = parseInt(rank, 10);
  }

  return suitMult + unnumberValues - 1;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
