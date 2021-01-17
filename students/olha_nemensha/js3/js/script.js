console.log("Задание 1. Cумма всех чисел в заданном пользователем диапазоне.");
const fisrtNum= +prompt("Введите число от ", "");
const lastNum = +prompt("Введите число до ", "");
let sum = 0;
for (let i = fisrtNum; i <= lastNum; i++ ) {
    sum = sum + i;
}
const resultSumOfNum = "Cумма всех чисел " + sum;
console.log(resultSumOfNum);

console.log("Задание 2. Hаибольший общий делитель");
const numFisrt= +prompt("Введите первое число ", "");
const numSecond = +prompt("Введите число ", "");
let min = (numFisrt < numSecond) ? numFisrt : numSecond;
console.log (min);
let max = 1;
while (min > 0){
    if (!(numFisrt % min) && !(numSecond % min)) {
        max = min;
        break;
    }
    min--;
}
const resultMaxNumber = "Наибольший общий делитель " + max;
console.log(resultMaxNumber);

console.log("Задание 3. Все делители числа.");
const num = +prompt("Введите число ", "");
let allNum = "";
let newNum = num;
while (newNum > 0){
    if (num % newNum === 0) allNum = allNum + " " + newNum;
    newNum--;
}
const resultAllNum = "Все делители числа " + allNum;
console.log(resultAllNum);

console.log("Задание 4. Количество цифр в введенном числе.");
let numDigit = +prompt("Введите число ", "");
let j;
for (j = 0; numDigit >= 1 ; j++) {
    numDigit = numDigit / 10;
}
const resultNumDigit = "Количество цифр в введенном числе " + j;
console.log(resultNumDigit);

console.log("Задание 5. 10 чисел");
let pnum;
let even = 0;
let odd = 0;
let zero = 0;
let pos = 0;
let neg = 0;
for (let g =1; g <= 10; g++){
    pnum = +prompt("Введите число ", "");
    (pnum % 2) ? odd = ++odd : even = ++even;
    if ( pnum > 0) {
        ++pos;
    } else if (pnum < 0){
        ++neg;
    } else ++zero;
}
const resultEven = "Количество четных " + even;
const resultOdd = "Количество нечетных " + odd;
const resultZero = "Количество нулей " + zero;
const resultPos = "Количество положительных " + pos;
const resultNeg = "Количество отрицательных " + neg;
console.log(resultEven);
console.log(resultOdd);
console.log(resultZero);
console.log(resultPos);
console.log(resultNeg);

console.log("Задание 6. Зациклить калькулятор.");
let result;
do {
    let n1 = +prompt("Введите число ", "");
    let n2 = +prompt("Введите число ", "");
    let n3 = prompt("Введите действие ( + , - , / ,*) ", "");
    switch (n3){
        case "+": result = n1 + n2;
        break;
        case "-": result = n1 - n2;
        break;
        case "*": result = n1 * n2;
        break;
        case "/": result = n1 / n2;
        break;
    }
    console.log (result);
} while (confirm ("Продолжить?"));

console.log("Задание 7. Сдвиг числа.");
let numLong = prompt("Введите число ", "");
let numOfShift = +prompt("Введите число сдвига ", "");
const length = 10 ** (numLong.length - 1);
numLong = +numLong;
let newNumLong;
while (numOfShift > 0){
    newNumLong = Math.floor(numLong / length);
    numLong = (numLong - newNumLong * length) * 10 + newNumLong;
    --numOfShift;
}
const resultNumLong = 'Новое число после сдвига ' + numLong;
console.log(resultNumLong);

console.log ("Задание 8. Зациклить вывод дней недели");
let day = ['monday', 'tuesday' , 'wednesday', 'thursday', 'friday' , 'saturday', 'sunday'];
let dayNum = -1;
do {
    ++dayNum;
    if (dayNum === 7 ) dayNum = 0;
    } while (confirm ("Day of week " + day[dayNum] +". Continue?"));

console.log ("Задание 9. Таблица умножение");
let resultTabl;
for (let s = 2; s <= 9; s++) {
    for (let k = 1; k <= 10; k++){
        resultTabl = s * k;
        console.log (`${s} * ${k} = ${resultTabl}`);
    }
}

console.log("Задание 10. Игра Угадай число");
let answer;
const userNumber = prompt("Введите число от 0 до 100 ", "");
let usNum1 = 0;
let usNum2 = 100;
let halfNum = (usNum2 -usNum1)/ 2;
do {
    let answer = confirm ("Это ваше число " +  halfNum )
if (answer) {
    console.log ("Ваше число " +halfNum);
} else if (confirm ("Bаше число < " + halfNum)) {
    usNum2 = halfNum;
    halfNum = usNum2 - Math.floor((usNum2 -usNum1)/ 2);
} else if (confirm ("Bаше число > " + halfNum)) {
    usNum1 = halfNum;
    halfNum = halfNum + Math.floor((usNum2 -usNum1)/ 2);
}
} while (!answer);

