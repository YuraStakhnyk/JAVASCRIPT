// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let str1 = 'hello world';
console.log(str1.length)

let str2 = 'lorem ipsum';
console.log(str2.length)

let str3 = 'javascript is cool';
console.log(str3.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let strUp1 = 'hello world';
console.log(strUp1.toUpperCase());

let strUp2 = 'lorem ipsum';
console.log(strUp2.toUpperCase());

let strUp3 = 'javascript is cool';
console.log(strUp3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
let strLo1 = 'HELLO WORLD';
console.log(strLo1.toLowerCase());

let strLo2 = 'LOREM IPSUM';
console.log(strLo2.toLowerCase());

let strLo3 = 'JAVASCRIPT IS COOL';
console.log(strLo3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let strDirty = ' dirty string   ';
console.log(strDirty.substring(1,13));
console.log(strDirty.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str = 'Ревуть воли як ясла повні';
let split = str.split(' ');
console.log(split)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
//   перетворити всі об'єкти в масиві на стрінгові.
//
// let array = [10,8,-7,55,987,-1011,0,1050,0];  // я зробив toString незнаю чи так можна, умову читав там через map
// let string = array.toString()
// console.log(string)
//
const arr = [10,8,-7,55,987,-1011,0,1050,0];         // правильний варіант перетворення числа на стрінгу
let strings = arr.map(value => value.toString());
// let strings = arr.map(value => String(value));
// let strings = arr.map(value => value + '');
console.log(strings);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
//
// let nums = [11,21,3];
// nums.reverse()
// console.log(nums)
// //
// // sortNums(nums,'descending') // [21,11,3]
// //
// nums.sort (numsSort);
// function numsSort (a, b) {
//     if (a > b) {
//         return -1;
//     } else if (b > a) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// console.log(nums)
//
let nums = [11, 21, 3];

const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((m1, m2) => {
    return m2.monthDuration - m1.monthDuration;
})
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
for (let i = 0; i < coursesAndDurationArray.length; i++){
    const mount = coursesAndDurationArray[i];
    if (mount.monthDuration > 5){
        console.log(coursesAndDurationArray[i]);
    }
};
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);  // варіант з фільтром
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
]
const cardNames = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card);
    }
}
deck.push({cardSuit: 'joker', value: null, color: 'red'});
deck.push({cardSuit: 'joker', value: null, color: 'black'});
console.log(deck);

// - знайти піковий туз

let filter = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(filter);

// - всі шістки

let filter1 = deck.filter(value =>value.value === 6);
console.log(filter1);

// - всі червоні карти

let filter2 = deck.filter(value =>value.color === 'red');
console.log(filter2);

// - всі буби

let filter3 = deck.filter(value =>value.cardSuit === 'diamond');
console.log(filter3);

// - всі трефи від 9 та більше

let filter4 = deck.filter(value =>(value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string'));
console.log(filter4);

// let filter = deck.filter(value =>value.cardSuit === 'clubs' && value.value >= '9' || value.value === '10');   //  варіант зі стрінговими числами
// console.log(filter);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
let reduce = deck.reduce((accum, value) => {
    if (value.cardSuit === 'spade') {
        accum.spades.push(value);
    } else if (value.cardSuit === 'clubs') {
        accum.clubs.push(value)
    } else if (value.cardSuit === 'diamond') {
        accum.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        accum.hearts.push(value)
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);
