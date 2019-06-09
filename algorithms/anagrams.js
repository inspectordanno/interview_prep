
function anagrams(stringA, stringB) {

  //make string lowercase and remove spaces
  stringA = stringA.replace(/[^/w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^/w]/g, '').toLowerCase();

  console.log(stringA);

  const sortString = (string) => {
    string = string.split('');
    string = string.sort();
    return string.join('');
  }

  console.log(sortString(stringA));
  
  const charMapA = {};
  const charMapB = {};

  const makeCharacterMap = (charMap, string) => {
    for (let char of string) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  }

  makeCharacterMap(charMapA, stringA);
  makeCharacterMap(charMapB, stringB);

Object.entries(charMapA).forEach((keyA, valueA) => {
  Object.entries(charMapB).forEach((keyB, valueB) => {
     if (keyA === keyB && valueA === valueB) {
       return true;
     } else {
       return false;
     }
 });
});

}

anagrams('hello', 'olleh')
