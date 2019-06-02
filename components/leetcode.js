// const recursive = (n) => {
//   console.log(n)
//   if (n >= 0) {
//     recursive(n-1);
//   }
// }

// recursive(5);

//leetcode 1

// const a = [[0,1,1], [1,0,1], [1,1,0]];

//   const finished = a.map((b)=> {

//     const flipped = b.map((d,i) => {
//       return d = b[(b.length - 1) - i];
//     });
    
//     const inverted = flipped.map((d) => {
//       return d === 0 ? d = 1 : d = 0;
//     });
    
//     return inverted;
//   });


// console.log(finished);

//leetcode 2

// const n = 19;

// const sumSquare = (n) => {
//   const N = n.toString();
//   let sum  =  0;
//   for (let digit of N) {
//       const product = +digit * +digit;
//       sum += product;
//   }  
//   console.log(sum);
//   if (sum === 1) {
//     return true;
//   } else {
//     return sumSquare(sum);
//   }
// };

// console.log(sumSquare(n));
