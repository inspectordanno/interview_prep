function maximumOccuringCharacter(str) {
  //character map
  const charMap = {};

  //if character exits in map, increase its value; otherwise, set it to 1
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  console.log(charMap);

  //greatest amount of times a character is in the string
  let maxCount = 0;
  //character with the highest count
  let maxChar = '';

  //for each character in the charMap
  for (let char in charMap) {
    //if the count of the character is greater than the max count, set maxCount to the new value and maxChar to the new char
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxChar = char;
    //if it is the same, if the char's index is lower than the maxChar's index, set the maxChar to char
    } else if (charMap[char] === maxCount) {
      if (str.indexOf(char) < str.indexOf(maxChar)) {
        maxChar = char;
      }
    }
  }
  //return the maxChar
  return maxChar;
}

console.log(maximumOccuringCharacter('hellooworld'));