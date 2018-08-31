const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const $cansel = 'Відмінено користувачем!';
const $accessDenied = 'Доступ заборонено!';
const $welcome = 'Ласкаво просимо!';

const $login = prompt('Enter Login');
if ($login === null) {
    alert($cansel)
} else {
    if ($login !== adminLogin) {
        alert($accessDenied)
    } else {
        const $password = prompt('Enter password')
        if ($password === null) {
            alert($cansel)
        } else {
            if ($password !== adminPassword) {
                alert($accessDeniend)
            } else {
                alert($welome);
            }
        }
    }
}