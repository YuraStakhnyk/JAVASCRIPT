// --створити масив з:
// - з 5 числових значень
//
// let arr = [1,2,3,4,5];
// console.log(arr);



// - з 5 стічкових значень
//
// let arr1 = ['string','hooli','google','yahoo','youtube'];
// console.log(arr1);



// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let arr2 = ['string','hooli',1,true, false,];
// for (const arr2Element of arr2) {
//     if (typeof arr2Element === 'boolean'){
//         console.log(arr2Element)
//     }
// }



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let zero = [];
// zero[0] = 2;
// zero[1] = 'string';
// zero[2] = true;
// zero[4] = 'cool';
// zero[5] = 5674;
// console.log(zero)



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом while та вивести  числа тільки парні  значення
//
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < array.length){               // непарні
//     let = array[i];
//     if(array[i] % 2){
//     console.log(array[i])}
//     i++;
// };
//
// let i = 0;
// while (i < array.length){               // парні
//     let = array[i];
//     if((array[i] % 2) === 0)
//         console.log(array[i])
//     i++;
// };
//
// let i = array.length - 1;                  // парні в зворотному напрямку
// while (i >= 0){
//     if (array[i] % 2 === 0){
//         console.log(array[i])
//     }
//     i--;
// }
//
// let i = array.length - 1;                  // непарні в зворотному напрямку
// while (i >= 0){
//     if (array[i] % 2){
//         console.log(array[i])
//     }
//     i--;
// }



// 5. перебрати циклом for та вивести  числа тільки з непарним індексом
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = 0; i < array.length; i++){                           // непарні
//     if(array[i] % 2)
//         console.log(array[i])
// }
//
// for (let i = 0; i < array.length; i++){                           // парні
//     if(array[i] % 2 === 0)
//     console.log(array[i])
// }
//
// let newArr = [];
// for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {         // зворотній порядок 2 варіанти
//     newArr[j] = array[i]
// }
// console.log(newArr);
//
// for (let i = array.length - 1; i >= 0 ; i--) {
//     console.log(array[i])
//
// }
//
// for (let i = array.length - 1; i >= 0; i--) {                         // зворотній порядок парні числа
//    if (array[i] % 2 ===0){
//        console.log(array[i])
//    }
// }
//
// for (let i = array.length - 1; i >= 0; i--) {                         // зворотній порядок непарні числа
//     if (array[i] % 2){
//         console.log(array[i])
//     }
// }



// 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = 0; i < array.length; i ++) {            // невірний варіант
//     array[2] = 'okten';
//     array[5] = 'okten';
//     array[8] = 'okten';
//     console.log(array[i])
// };
//
// for (let i = 0; i < array.length; i++) {             // правильний варіант кратний 3
//     if (array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     console.log(array[i])
// }
//
// for (let i = array.length - 1; i >=0; i--) {         // зворотній варіант
//     if (array[i] % 3 === 0){
//         array[i] = 'okten';
//     };
//     console.log(array[i])
// }



// 8. вивести масив в зворотньому порядку.
//
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     console.log(arrayElement)
// }



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = [0,1,2,3,4,5,6,7,8,9];
// console.log(arr);



// - Створити масив з 10 стpокових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['hello','world','it','is','a','good','day','to','herson','ua'];
// console.log(arr);



// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr = ['hello','world','it','is',100,'good',false,'to',true,5];
// console.log(arr);



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
//
// let arr = [12,45,false,true,'come','yes',56,98,'string','jet']


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// let arr = [1,2,3,4,'yahoo','hello','world','youtube', false, true]
//     for (const arrElement of arr){
//         if (typeof arrElement === 'number'){
//             console.log(arrElement);
//         }
// }



// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
// let arr = [1,2,3,4,'yahoo','hello','world','youtube', false, true];
//     for (const arrElement of arr) {
//         if (typeof arrElement === 'string'){
//             console.log(arrElement)
//         }
// }



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'my';
// arr[2] = 'followers';
// arr[3] = 'our';
// arr[4] = 3000;
// arr[5] = 'i want 1000000 today';
// arr[6] = 'it is real';
// arr[7] = true;
// arr[8] = 'or';
// arr[9] = false;
// console.log(arr)



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i+=1) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }



// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=1) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 2; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//     console.log(i)
//     document.write(`<div>${i}</div>`)
// }



// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
//
// let books = [
//     {name: 'Vanilla sky', page: 100, author: ['T.Cruise','J.Nick', 'I.I.Lee', 'Y.Momoto'], ganres: ['Roman']},
//     {name: 'Wife of the future', page: 190, author: ['L.Jhone','J.Hooney'], ganres: ['Fantastic']},
//     {name: 'Babilon', page: 80, author: ['F.Moseim','J.J.Steward', 'J.Kloon'], ganres: ['Fantastic', 'Triller']},
//     {name: 'Big fish', page: 340, author: ['T.Barton'], ganres: ['Fantastic']},
// ]
//
// - знайти наібльшу книжку.
//
// let page = books[0];                                  // більша кількість сторінок в книжці
// for (const book of books) {
//     if (book.page > page.page){
//         page = book;
//     }
// }
// console.log(page)
//
// let page = books[0];                                  // менша кількість сторінок в книжці
// for (const book of books) {
//     if (book.page < page.page){
//         page = book;
//     }
// }
// console.log(page)



// - знайти книжку/ки з найбільшою кількістю жанрів
//
// let ganres = books[0];                                      // більша кількість жанрів в книжці
// for (const book of books) {
//     if (book.ganres.length > ganres.ganres.length){
//         ganres = book;
//     }
// }
// console.log(ganres)



// - знайти книжку/ки з найдовшою назвою
//
// let name = books[0];                                      // більша назва в книжці
// for (const book of books) {
//     if (book.name.length > name.name.length){
//         name = book;
//     }
// }
// console.log(name)



// - знайти книжку/ки які писали 2 автори
//
// let author = books[0];                                      // більша кількість авторів в книжці
// for (const book of books) {
//     if (book.author.length > author.author.length){
//         author = book;
//     }
// }
// console.log(author)



// - знайти книжку/ки які писав 1 автор
//
// let author = books[0];                                      // один автор в книжці
// for (const book of books) {
//     if (book.author.length === 1) {
//         author = book;
//     }
// }
// console.log(author)



// - знайти книжку/ки які писав 1 автор
//
// let author = books[0];                                      // 2 автор в книжці
// for (const book of books) {
//     if (book.author.length === 2) {
//         author = book;
//     }
// }
// console.log(author)