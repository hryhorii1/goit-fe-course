'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => (login.length >= 4 && login.length < 16) ? true : false;

const isLoginUnique = (logins, login) => logins.includes(login) ? false : true;
 
const addLogin = function (login) {
    const loginArray = logins;
   
    if (isLoginValid(login) !== true) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
      } else if (isLoginUnique(logins, login) !== true) {
        console.log('Такой логин уже используется!');
      } else {
        loginArray.push(login);
        console.log('Логин успешно добавлен!');
      }
    }

// // Вызовы функции для проверки
addLogin('Ajax'); // 'Логин успешно добавлен!'
addLogin('robotGoogles'); // 'Такой логин уже используется!'
addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'