const ADMIN_PASSWORD ='adminpass';

let message = prompt('Введите Пароль')

if (message == ADMIN_PASSWORD){
    alert('Добро пожаловать!')
}
else if (message == null){
    alert('Отменено пользователем!')
}
else if (message || ADMIN_PASSWORD){
   alert('Доступ запрещен, неверный пароль!')
}


