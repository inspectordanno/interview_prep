function linearSearch(array, value) {
  //in forEach loop, return does not break function!
  let found;
  array.forEach((currentValue, index) => {
    if (value === currentValue) {
      found = index;
    }
  });
  if (typeof found === 'number') {
    return found;
  } else {
    return -1;
  }
}

const arr = [1,2,3,4,5];

const found = linearSearch(arr, 3);
console.log(found);

