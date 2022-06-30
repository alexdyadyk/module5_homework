'use strict'

// Задание 2
let x = 5;
console.log(typeof x);

if (typeof x === 'number') {
   console.log('X - число')
} else if (typeof x === 'string') {
   console.log('X - строковый тип')
} else if (typeof x === 'boolean') {
   console.log('X - логический тип')
} else {
   console.log('Тип X не определен')
}