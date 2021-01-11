let credits = 35500;
let pricePerDroid = 3000;
let message = prompt('Сколько Дроидов вы хотите купить?')


if (message == null){
    alert('Отменено пользовоталем!')
}

if (Number(message)){
let totalPrice = message*pricePerDroid

if(totalPrice <= credits)
    alert(`Вы купили ${message} Дроидов, на счету осталось ${credits - totalPrice} кредитов.`)

if(totalPrice > credits)
    alert('Недостаточно средств на счету!')
}

