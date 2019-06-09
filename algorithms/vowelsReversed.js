
//1. define vowels.
//2. iterate over string, and see if char is in vowels string
//3. if it is. log its index
//4. reverse indexes and put string in original index
//5. return new string

function reverseVowels(word) {
  //list of vowels
  const vowels = 'aAeEiIoOuU';

  //this will store vowels in the word
  const vowelsMap = [];

  //pushes vowels of the word plus the vowels index to vowelsMap
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelsMap.push([word[i], i]);
    }
  }

  //reverse vowels map which will allow us to reverse vowels
  vowelsMap.reverse();

  //separate word into array
  const wordArray = word.split('');

  //split word in array
  wordArray.forEach((char,i) => {
    //if char is a vowel, replace char at that index with the first string in vowelsMap, and then delete that entry from vowelsMap
    if (vowels.includes(char)) {
      wordArray[i] = vowelsMap[0][0];
      vowelsMap.shift();
    }
  })

  //return the joined array
  const joinedArrayString = wordArray.join('');
  return joinedArrayString;
}

console.log(reverseVowels('hello WORLD'));

