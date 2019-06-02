const integers = [15,45,75,6,10,21];

const isIdeal = (number) => {

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <=9; j++) {
      if ((3**i) * (5**j) === number) {
        console.log(number);
      }
    }
  }
}


for (let i = 200; i <= 405; i++) {
  isIdeal(i);
}
