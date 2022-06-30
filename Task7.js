'use strict'

// Задание 7
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let even = 0, odd = 0, zero = 0;

for (let i = 0; i < arr.length; i++) {
   if (arr[i] == 0) {
      zero = zero + 1;
   } else if (arr[i] % 2 == 1) {
      odd = odd + 1;
   } else if (arr[i] % 2 == 0) {
      even = even + 1;
   }
}

console.log(`Четных - ${even}, Нечетных - ${odd}, Нулей - ${zero}`)