'use strict'

// Задание 8
let emplo = new Map([
   
   ["Alex", "34"],
   
   ["Ivan", "33"],
   
   ["Sergey", "35"]
   
]);


for (let [key, value] of emplo) {
   
   console.log(`Ключ - ${key}, значение - ${value}`);
   
}