function areThereDuplicates(...args) {
  //sort array
  args.sort((a,b) => a < b ? -1 : 1);

  //start
  let start = 0;

  //next
  let next = 1;

  //while start is at least two from the end of the array
  while (next < args.length) {
    //if first pointer equals second (duplicate), return true
    if (args[start] === args[next]) {
      return true;
    }

    //if they don't, move next forward
    next++;

    //if next is at the end of the array, move the start forward and set next to one after start
    if (next === args.length - 1) {
      start++;
      next = start + 1;
    }
  }

  //if while loop doesn't return true, return false (no duplicate)
  return false;
}

console.log(
  areThereDuplicates(1,2,3,4,5,6,7,8,9,10,11,10)

);