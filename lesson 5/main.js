// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
function area(a, b) {
    return (a + b) * 2;
}

let x = area(24, 41);
console.log(x);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
function circle(r, pi) {              // сорі гуглив як знайти площу за радіусом і знайшов
    return pi * r * 2;                  // Площа круга   S = πr2, де π = 3,14, r – радіус круга.
}

let y = circle(16, 3.14);
console.log(y);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
function cylinder(r, h, pi) {         // S = 2πRH , де R — радіус циліндра, H — висота циліндра.
    return 2 * pi * r * h
}

let z = cylinder(4, 12, 3.14);
console.log(z);


// - створити функцію яка приймає масив та виводить кожен його елемент
//
function arrElement(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

arrElement([11, 23, 34, 45, 55]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
function addteg(tag, text) {
    document.write(`<S{tag}>${text}</${tag}>`)
}

addteg('p', 'text argument or no');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
function foo(text){
    document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`
    )
}

foo( 'hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
function par(text, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

par('text lizhka', '3')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function array(arr) {
//     for (const item of arr) {
//         console.log(item);
//     }
// }
//
// array([12, 1, 32, 'strin', true]);
//
let arr0 = [1, 2, true, false, 'come on'];
const elem = function (array0){
    document.write(`<ul>`);
    for (const item0 of array0) {
        document.write(`<li>${`item0`}</li>`)
    }
    document.write(`</ul>`)
}
elem(arr0)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const userarr = function (array11) {
    for (const user of array11) {
        document.write(`<div>${user.name}  ${user.age}  ${user.status}</div>`)
    }
    ;
}
userarr(users);


// - створити функцію яка повертає найменьше число з масиву
//
let aaar = [1, 2, 3, 4, 50, -3, -34];

function foomin(array){
    let min = array[0];
    for (const item of array) {
        if (item < min){
        min = item;
        }
    }
    return min
}
let foomin1 = foomin(aaar)
console.log(foomin1)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
let calculator = (a, b, c) => a + b + c;        // обчислення без масиву
let c = calculator(1, 2, 10);
console.log(c)


let arr = [1, 2, 10];                           // правильний варіант через масив
function foo(array){
    let sum = 0
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(foo(arr))