'use strict'

let userArr = [];
let userInput;
let total = 0;

do {
    userArr.push(Number(userInput = prompt('Введіть число масива')));
} while (Number(userInput) > 0);

for (const i of userArr) {
    if (isNaN(total += i)) {
        alert('Було введено не число, спробуйте ще раз');
        break;
    }
}

if (total > 0) {
    alert(`Сума всіх значень в масиві: ${total}`);
}

console.log(total);