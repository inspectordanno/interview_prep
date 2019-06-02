//reverse a string
//way 1

const string = 'hello world';
const letters = [];

for (letter in string) {
  const character = {
    character: string[letter],
    index: +letter
  }
  letters.push(character);
}

letters.sort((a, b) => b.index - a.index);

let newString = '';

letters.forEach((letter) => {
  newString = newString + letter.character;
})

console.log(newString);

// //way 2
const reverse = () => {
  let newerString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newerString += string[i];
  }
  return newerString;
}

console.log(reverse());

//way 3

function reverseStringThree(str) {

  let accumulator = '';

  for (char of str) {
    accumulator = char + accumulator;
  }

  console.log(accumulator);
}

reverseStringThree('shartfart');

//way 4


function reverseStringFour(str) {
  return str.split('').reduce((accumulator, currentValue) => currentValue + accumulator, '');
}

console.log(reverseStringFour('fuck'));

//way 5

function reverse(str) {
 return str.split('').reverse().join('');
}