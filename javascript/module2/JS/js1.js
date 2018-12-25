'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Введіть число');
    if (isNaN(userInput)) {
        alert('Було введено не число, спробуйте ще раз')
    } else {
        numbers.push(Number(userInput));
    }
} while (userInput != null);

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}
if (total !== 0) {
    alert(`Загальна сума чисел рівна ${total}`);
} else {
    alert('Масив пустий!');
}