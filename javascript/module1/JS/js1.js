'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const cansel = 'Відмінено користувачем!';
const accessDenied = 'Доступ заборонено!';
const welcome = 'Ласкаво просимо!';
const user = prompt('Введіть ваш логін');

console.log(user);

if (user === null) {
    alert(cansel);
} else if (adminLogin === user) {
    const userPassword = prompt('Введіть ваш пароль');
    if (userPassword === null) {
        alert(cansel);
    } else if (userPassword === adminPassword) {
        alert('Ласкаво просимо!')
    } else {
        alert('Помилка при вході! Не вірний пароль!')
    }
} else {
    alert('Доступ заборонено!')
}