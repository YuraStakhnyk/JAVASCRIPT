// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let str1 = 'hello world';
console.log(str1.indexOf('h'));  // 0
console.log(str1.indexOf('d'));  // 10

let str2 = 'lorem ipsum';
console.log(str2.indexOf('l'));      // 0
console.log(str2.lastIndexOf('m'));  // 10

let str3 = 'javascript is cool';
console.log(str3.indexOf('j'));      // 0
console.log(str3.lastIndexOf('l'));  // 17


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
console.log(strDirty.indexOf('d'));      // 1
console.log(strDirty.lastIndexOf('g'));  // 12
console.log(strDirty.substring(1,13));


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
let array = [10,8,-7,55,987,-1011,0,1050,0];  // я зробив toString незнаю чи так можна, умову читав там через map
let string = array.toString()
console.log(string)
console.log(typeof string)
console.log(typeof array)



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
//
let nums = [11,21,3];
nums.reverse()
console.log(nums)
//
// sortNums(nums,'descending') // [21,11,3]
//
nums.sort (numsSort);
function numsSort (a, b) {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}
console.log(nums)



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


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
let block = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'}
    ]
//



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
let reduce = block.reduce((accumulator, card) => {
    accumulator.cardSuit.push(card.cardSuit);
    accumulator.value.push(card.value);
    accumulator.color.push(card.color);
    return accumulator;
}, {cardSuit: [], value: [], color: []});
console.log(reduce);


