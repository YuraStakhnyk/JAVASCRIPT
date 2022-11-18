// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function foo(a, b, c) {                             // звичайна функція
//     if (a > b && b < c) {
//         console.log(b);
//     } else if (b > a && a < c) {
//         console.log(a);
//     } else if (b > c && c < a) {
//         console.log(c);
//     } else {
//         console.log('Error');
//     }
// }
// foo(1,2,3);


// const foo = (a, b, c) => {                             // стрілочна функція
//     if (a > b && b < c) {
//         console.log(b);
//     } else if (b > a && a < c) {
//         console.log(a);
//     } else if (b > c && c < a) {
//         console.log(c);
//     } else {
//         console.log('Error');
//     }
// };
// foo(1,2,3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// const foo = (a, b, c) => {                             // стрілочна функція
//     if (a < b && b > c) {
//         console.log(b);
//     } else if (b < a && a > c) {
//         console.log(a);
//     } else if (b < c && c > a) {
//         console.log(c);
//     } else {
//         console.log('Error');
//     }
// };
// foo(1,2,3);


// - створити функцію яка повертає найбільше число з масиву
//
// const arr = [1,2,33,12,4];
// const max = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     return max;
// }
// console.log(max(arr));


// - створити функцію яка повертає найменьше число з масиву
//
// const arr = [1, 3, 15, 44, -10];
// const min = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(min(arr));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// const array = (a, b, c) => a + b + c;
// console.log(array(1, 2, 10))


// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// const num = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// num(5)


// - Дані два цілих числа A і В . Вивести всі числа від A до B включно, в порядку зростання, якщо A < B,
//   або в порядку зниження в іншому випадку.
// //
// function foo(a, b){                                  // в процесі зростання
//     if (a < b){
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     }
// }
// foo(1,8);
//
// function foo(a,b){                                      // в процесі зниження
//     if (a > b){
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
// foo(13,4)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//
// const arr = [9,8,0,4];
// function foo(array, num){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i +1]){
//             let temp = array[num];
//             array[num] = array[num +1];
//             array[num + 1] = temp;
//         }
//     }
//     return array;
// }
//
// console.log(foo(arr, 0));
//
// const arr = [9, 8, 0, 4];
// function foo(arr, i){
//     if(i === 0){
//         [arr[0], arr[1]] = [arr[1], arr[0]];
//     }
//     return arr;
// }
//
// console.log(foo(arr, 0))

//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//
// const arr = [9, 8, 0, 4];
// function foo(arr, i){
//     if (i === 1){
//         [arr[1], arr[2]] = [arr[2], arr[1]];
//     }
//     return arr
// }
//
// console.log(foo(arr, 1))


//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// const arr = [9, 8, 0, 4];
// function foo(arr, i){
//     if (i === 2){
//        [arr[2], arr[3]] = [arr[3], arr[2]];
//     }
//     return arr
// }
//
// console.log(foo(arr, 2))


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
//
// const arr = [1, 0, 6, 0, 3]; // => [1, 6, 3, 0, 0]
// function foo(arr, i){
//     if (i === 1){
//         [arr[1], arr[2], arr[4]] = [arr[2], arr[4], arr[1]];
//     }
//     return arr
// }
//
// console.log(foo(arr,1))

// [0,1,2,3,4] // => [1,2,3,4,0]
//
// const arr = [0,1,2,3,4] // => [1,2,3,4,0]
// function foo(arr, i){
//     if (i === 0){
//         [arr[0], arr[1], arr[2], arr[3], arr[4]] = [arr[1], arr[2], arr[3], arr[4], arr[0]]
//     }
//     return arr
// }
//
// console.log(foo(arr, 0))

// [0,0,1,0]   // => [1,0,0,0]
// //
// const arr = [0, 0, 1, 0] // => [1, 0, 0, 0]
// function foo(arr, i){
//     if (i === 0){
//         [arr[0], arr[2]] = [arr[2], arr[0]];
//     }
//     return arr
// }
//
// console.log(foo(arr, 0))


// const arr = [0,0,1,0];
// function foo(array) {
//     const newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         array[i] ? newArray[index++] = array[i] : counter++;
//     }
//     const num = newArray.length;
//     for (let i = num; i < num + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }
//
// console.log(foo(arr));