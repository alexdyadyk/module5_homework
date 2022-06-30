'use strict'

// Задание 3
function reverseString(str) {
   let splitString = str.split("");
   let reverseArray = splitString.reverse();
   let joinArray = reverseArray.join("");
   
   console.log(joinArray);
}

reverseString("Hello");