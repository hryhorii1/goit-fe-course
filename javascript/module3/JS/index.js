'use strict';

const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
    const min = 4;
    const max = 16;
    const inRange = login.length >= min && login.length <= max;
    return inRange;
};

const isLoginUnique = function (allLogins, login) {
    for (let i = 0; i < allLogins.length; i += 1) {
        if (allLogins[i] === login) {
            return false;
        }
    }
    return true;
};

const addLogin = function (login) {
    isLoginValid(login);
    isLoginUnique(allLogins, login);
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login)
            return 'Логін успішно додано!';
        } else {
            return 'Такий логін вже використовується!';
        }
    } else {
        return 'Помилка! Логін має бути від 4 до 16 символів';
    }
};

console.log(addLogin('Ajax'));
console.log(addLogin('robotGoogles'));
console.log(addLogin('Zod'));
console.log(addLogin('jqueryisextremelyfast'));
console.log(allLogins);