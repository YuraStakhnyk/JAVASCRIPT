"use strict";

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'element1', true, '1223', 234, 'element2', false, '65432', 'element3', 'lost']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log(arr.length)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: '"Bookvar"',
    pageCount: 34,
    ganre: 'documental book'
    }
console.log(book1);
let book2 = {
    title: '"Romeo and Juliet"',
    pageCount: 200,
    ganre: 'romance'
}
console.log(book2)
let book3 = {
    title: '"Mavka"',
    pageCount: 12,
    ganre: "fairy tail"
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: '"Bookvar"',
    pageCount: 34,
    ganre: 'documental book',
    authors: [
        {
            name: 'My Teacher',
            age: 34
        }]}
console.log(book4);
let book5 = {
    title: '"Romeo and Juliet"',
    pageCount: 200,
    ganre: 'romance',
    authors: [
        {
            name: 'W.Shekspier',
            age: "dead"
        }]}
console.log(book5)
let book6 = {
    title: '"Mavka"',
    pageCount: 12,
    ganre: "fairy tail",
    authors: [
        {
            name: 'L.Ukrainka',
            age: "eternal"
        }]}
console.log(book6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let users = [
    {name: 'yura', username: 'ys', password: 123456},
    {name: 'vanya', username: 'van', password: 687656},
    {name: 'olya', username: 'ol', password: 124556},
    {name: 'igor', username: 'igo', password: 120056},
    {name: 'vova', username: 'vv', password: 123400},
    {name: 'natalya', username: 'nya', password: 903456},
    {name: 'pasha', username: 'ps', password: 113456},
    {name: 'vasya', username: 'vas', password: 129996},
    {name: 'lilya', username: 'lil', password: 143436},
    {name: 'sasha', username: 'ss', password: 999456}
]
console.log(users[0].password),
console.log(users[1].password),
console.log(users[2].password),
console.log(users[3].password),
console.log(users[4].password),
console.log(users[5].password),
console.log(users[6].password),
console.log(users[7].password),
console.log(users[8].password),
console.log(users[9].password)
