// -   Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let y = prompt('назвіть число');
console.log(y)
if (y > 0) {
    document.write('<h1>true</h1>');
} else if (y < 0) {
    document.write("<h1>true</h1>");
} else if (y = 0) {
    document.write('<h1>false</h1>');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Яка чверть години');
if (time < 15) {
    document.write("перша чверть");
} else if (time >= 15 && time < 30) {
    document.write('друга чверть');
} else if (time >= 30 && time < 45) {
    document.write("третя чверть");
} else if (time >= 45 && time <= 59) {
    document.write('четверта чверть');
} else {
    document.write('none')
}
;

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = +prompt('Число якої декади місяця');
if (day < 11) {
    document.write("перша декада");
} else if (day >= 11 && time < 21) {
    document.write('друга декада');
} else if (day >= 21 && time < +31) {
    document.write("третя декада");
} else {
    document.write('none')
}
;

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt("Який день тижня")
switch (week) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
}
;

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = +prompt("First number");
let b = +prompt("Second number");
if (a>b){
    console.log(a);
}else if (a<b){
    console.log(b);
}else if (a === b){
    console.log("equil");
}else{
    console.log('error')
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy
//     (хибноподыбне, тобто кастується до false)

let x = prompt() || 'default';
console.log(x);