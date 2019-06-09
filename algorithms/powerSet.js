function powerSet(inputStr) {
  //collect of strings
  const stringCollection = [];

  //0n solution

  //beginning index is 0
  let startIndex = 0;
  //beginning length is 1
  let length = 1;

  //while the start index is less than the total length
  while (startIndex < inputStr.length) {
    //push a substring from start index with length length
    const substring = inputStr.substr(startIndex, length);
    stringCollection.push(substring);
    //increase length by 1
    length += 1;

    // if the length is greater than the remaining length of the string
    if (length > inputStr.length - startIndex) {
      //increase the start index
      startIndex += 1;
      //reset length to 1
      length = 1;
    }
  }

  // 0n^2 solution

  //collects all strings from startIndex to looping end point
  // const getSubstring = (startIndex) => {
  //   for (let i = 1; i <= inputStr.length; i++) {
  //     const subString = inputStr.substr(startIndex, i);
  //     stringCollection.push(subString);
  //   }
  // }

  // //loops the start index
  // for (let i = 0; i <= inputStr.length; i++) {
  //   getSubstring(i);
  // }

  //removes spaces and empty strings
  const removeEmptyStr = stringCollection.filter(str => str !== ' ' && str !== '');
  //uses set to remove duplicate strings
  const unique = [...new Set(removeEmptyStr)];
  //sort unique strings by alphabetical order
  function sortStrings(a,b) {
    const aLower = a.toLowerCase();
    const bLower = b.toLowerCase();

    if (aLower < bLower) {
      return -1;
    } else if (aLower > bLower) {
      return 1;
    } else if (aLower === bLower) {
      return 0;
    }
  }

  unique.sort((a,b) => sortStrings(a,b));

  return unique;
};

console.log(powerSet('UnitedStatesofAmerica'));


