"use strict";

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [1, 'element1', true]
console.log(arr1);
let arr2 = [2, 'element2', true]
console.log(arr2);
let arr3 = [3, 'element3', true]
console.log(arr3);
let arr4 = [4, 'element5', false]
console.log(arr4);
let arr5 = [5, 'element5', true]
console.log(arr5);
let arr6 = [6, 'element6', true]
console.log(arr6);
let arr7 = ['7', 'element7', false]
console.log(arr7);
let arr8 = [8, 'element8', true]
console.log(arr8);
let arr9 = [9, 'element9', true]
console.log(arr8);
let arr10 = [10, 'element10', true]
console.log(arr9);

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
