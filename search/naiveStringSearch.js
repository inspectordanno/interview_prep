function substringCount(string, substring) {
  let count = 0;
 
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) { //if 
        break;
      }
      if (j === substring.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}

const string = 'bowwowwow'
const substring = 'wow';

console.log(substringCount(string, substring));
