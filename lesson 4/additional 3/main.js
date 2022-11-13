// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
//
//
// let arr = [];
// for (let i = 0, j = 0; i < 50; i++) {
//     if (i % 2 === 0){
//         arr[j] = i;
//         j++
//     }
// }
// console.log(arr)
// //
// for (let i = 0, j = 0; i < 50; i++) {
//     if (i % 2){
//         arr[j] = i;
//         j++
//     }
// }
// console.log(arr)
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 100);
// }
// console.log(arr)
//
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (742 - 8) + 8);
// }
// console.log(arr)



// 2. Вивести за допомогою console.log кожен третій елемен
//
// for (let i = 0; i < arr.length; i+=3) {
// console.log(arr[i])
// }



// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//
// for (let i = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }



// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//
// let newArr = []
// for (let i = 0, j = 0; i < arr.length; i+=3) {
//     if (arr[i] % 2 === 0){
//         newArr[j] = arr[i];
//     }
//     j++
// }
//         console.log(newArr);



// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0){
//         console.log(arr[i])
//     }
//
// }



// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки.
// Обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188]
// let count = 0
// for (const number of arr) {
//     count += number;
// }
// let res = Math.floor(count/arr.length);
// console.log(res)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//
// let arr = [3, 4, 7, 9];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] * 5;
// }
// console.log(newArr);



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.
//
// let arr = [1, 2, 3, 'string', 'youtube', true, false];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number'){
//         newArr = arr[i]
//     }
//     console.log(newArr)
// }



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//         ]
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }
// console.log(usersWithId)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = ['a','b','c']
// let str = '';
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str)



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arr = ['a','b','c']
// let i = 0;
// let str = '';
// while (i < arr.length){
//     str += arr[i];
//     i++;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let arr = ['a','b','c']
// let str = '';
// for (const string of arr) {
//     str += string;
// }
// console.log(str)

