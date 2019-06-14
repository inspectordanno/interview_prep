//given two positive integers, find out if the two numbers have the same frequency of digits

function sameFrequency(numOne, numTwo) {
  //first convert to string
  numOne = numOne.toString();
  numTwo = numTwo.toString();

  //see if they have same length of digits; if not, return false
  if (numOne.length !== numTwo.length) return false;

  //frequency map
  const frequencyMap = {};

  const setFrequencyMap = (str) => {
    //if frequency map exists in string, increment it by one; if not, set it to 1
    for (let char of str) {
      frequencyMap[char] = frequencyMap[char] + 1 || 1;
    }
  }

  //populate frequences with both string chars
  setFrequencyMap(numOne);
  setFrequencyMap(numTwo);

  //if any of the frequency map values aren't divisible by 2, than they cannot exist in both - same frequency is false
  for (let char in frequencyMap) {
    if (frequencyMap[char] % 2 !== 0) {
      return false;
    }
  }

  //return true if above test passes
  return true;
}

console.log(sameFrequency(41, 14));

