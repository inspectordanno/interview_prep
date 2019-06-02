//palindrome

function isPalindrome(str) {

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    console.log(str[(str.length -1) - i]);

    if (str[i] !== str[(str.length -1) - i]) {
      return false;
    }

    return true;
  }
}

isPalindrome('racecar');