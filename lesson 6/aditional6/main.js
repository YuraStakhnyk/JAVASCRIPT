// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
function cutString(str, n) {
    let result = [];
    for (let i = 0; i < str.length; i += n) {
        result.push(str.substring(i, i + n));
    }
    return result;
}
console.log(cutString('наслаждение',3));
//
//
// let strCut = 'наслаждение';
// let resultStr = strCut.replaceAll('л', ',л')    // це так збісило завдання яке не міг рішити
//     .replaceAll('д',',д')                       // що вирішив його так, а потім все таки сам знайшов рішення
//     .replaceAll('и',',и');
// let split = resultStr.split(',');
// console.log(split)
//


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
//
let str7 = 'Каждый охотник желает знать';
console.log(str7.substring(0, 7));
//
//
function delete_characters(str, length){
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let subs = str.substring(0, length-1);
        result = subs.split(0);
    }
    return result;
}
console.log(delete_characters('Каждый охотник желает знать', 7));
//
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => str.slice(0, length);
// let deleteCharacters = delete_characters(str, 7);
// console.log(deleteCharacters);


// перевести всі слова в рядку з великої букви.
//
let str55 = 'Каждый охотник желает знать';
const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
console.log(capitalize(str55));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
let str1 = "HTML JavaScript PHP";
let toUpperCase = str1.toUpperCase();
let result100 = toUpperCase.replaceAll(' ','-');
console.log(result100)
//
let str2 = "HTML JavaScript PHP";
let result2 = str2.toUpperCase()
                  .replaceAll(' ','-');
console.log(result2)
//
// let str = "HTML JavaScript PHP";
// const insert_dash = (str) => str.split(' ').join('-').toUpperCase();
// let insertDash = insert_dash(str);
// console.log(insertDash);


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
let str = 'hello';
const toUp = (str) => str[0].toUpperCase() + str.slice(1);
console.log(toUp(str));


// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

let replaceAll1 = n1.replaceAll('..', ' ');
console.log(replaceAll1);
let replaceAll2 = n2.replaceAll('---',' ');
console.log(replaceAll2);
let replaceAll3 = n3.replaceAll('__', ' ');
console.log(replaceAll3);


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
//
// let arr = [];
// function foo() {
//     for (let i = 0; i < 100; i++) {
//         arr[i] = Math.floor(Math.random() * 100);
//     }
//     return arr;
// }
// foo(arr)
// console.log(arr)
// //
// console.log(arr.sort(function (a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
// }));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
let arr = [];
function foo() {
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
  return arr;
}

console.log(foo(arr))
//



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
const val = (str92) =>{
    let str91 = str92.toLowerCase();
    if (!str91.startsWith('@') && str91.includes('@') && str91.includes('.', str91.indexOf('@') + 3)){
        console.log('Valid')
    }else{
        console.log('Not Valid')
    }
}
val('someemail@gmail.com');
val('someeMAIL@gmail.com');
val('someeMAIL@i.ua');
val('some.email@gmail.com');


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте
// над протоколом, з регулярками будете потім бавитись.
//
// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
let symb = "о";
let str60 = "Астрономия это наука о небесных объектах";

const count = (str60, symb) => {
    let count = 0;
    let split = str60.split('');

    for (const item of split) {
        if (item === symb) {
            count++;
        }
    }
    return count;
}
console.log(count(str60, symb));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
let str44 = "Сила тяжести приложена к центру масс тела";
const cutString3 = (str44,n) => str44.split(' ').splice(0, n).join(' ');
console.log(cutString3(str44, 5))


// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//   кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
//   3 і більше елементи.
//   Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
    if (friends.length >= 3){
        console.log('великий масив')
    }else if (friends.length >= 0 && friends.length < 3)
        console.log('маленький масив')


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//   Знайти, яке з них є середнім (більше одного, але менше за інше).
//   Перевірити, чи знаходиться перше число між двома іншими.
//
    function aT(a, b, c){
        if (a > b && a < c) {
            return a
        }else if (b > a && b < c) {
            return b
        }else if (c > a && c < b){
            return c
        }
     }
console.log(aT(1, 9, 6))

