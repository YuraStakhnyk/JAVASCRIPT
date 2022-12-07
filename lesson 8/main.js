// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Yura', 'Stakhnyk', 'yura@mail.ua',8097-47-62-777);
let user2 = new User(2,'Natali','Stakhnyk','nayali@mail.ua',8067-17-65-65);
let user3 = new User(3, 'Karolina', 'Stakhnyk','karolinayurivna@mail.ua', 067-67-67-77);
let user4 = new User( 4, 'Max','Kozak','max@mail.ua',8097-97-97-99);
let user5 = new User( 5, 'Nazar','Kozachok','maxkoch@mail.ua',8097-97-11-99);
let user6 = new User( 6, 'Ivan','Komar','komar@mail.ua',8096-97-97-99);
let user7 = new User( 7, 'Olya','Vorona','voronao@mail.ua',8097-97-17-99);
let user8 = new User( 8, 'Maria','Tuz','tuzm@mail.ua',8097-22-97-99);
let user9 = new User( 9, 'Lilya','Kvitka','lik@mail.ua',8097-97-77-88);
let user10 = new User( 10, 'Dmytro','Loik','dodo@mail.ua',8097-97-23-44);

let usersArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(usersArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(usersArr.filter(value => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
let sort = usersArr.sort((a, b) => (b.id - a.id));           // я зробив по спаданню, так як вони
console.log(sort);                                                                // і так були по ід в зростанні.


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
let user11 = new Client(1, 'Vasya', 'Pool', 'pool@mail.ua', 8097776655, 140);
let user12 = new Client(2, 'Kolya', 'Yuna', 'ponig@mail.ua', 8097776555, 40);
let user13 = new Client(3, 'Nastya', 'Ulika', 'joli@mail.ua', 8097446655, 45);
let user14 = new Client(4, 'Ira', 'Rubikon', 'yeti@mail.ua', 8097796655, 18);
let user15 = new Client(5, 'Demyan', 'Rekrut', 'ereter@mail.ua', 8097806655, 340);
let user16 = new Client(6, 'Oleg', 'Trivan', 'tumika@mail.ua', 8097386655, 210);
let user17 = new Client(7, 'Sergiy', 'Yutar', 'serik@mail.ua', 8097406655, 95);
let user18 = new Client(8, 'Veronika', 'Welesko', 'verik@mail.ua', 8097206655, 76);
let user19 = new Client(9, 'Mia', 'Quoka', 'miakol@mail.ua', 8097771055, 160);
let user20 = new Client(10, 'Ema', 'Zabiyna', 'emilia@mail.ua', 8097286655, 32);

let userAll = [user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]
console.log(userAll);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sortClient = userAll.sort((a, b) => (b.order - a.order));
console.log(sortClient)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car (model, producer, year, maxSpeed, engineCapacity){
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

}


let car1 = new Car('Tesla', 'Mask',2020,180,2.0 );
console.log(car1)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
Car.prototype.greeting = function drive(){
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`
}
console.log(car1.greeting())


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
Car.prototype.greeting = function info(){
    return `model - ${this.model}
producer - ${this.producer} corporation
year - ${this.year} year
max speed - ${this.maxSpeed} kmh
engine capacity - ${this.engineCapacity} l`
}
console.log(car1.greeting())


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
Car.prototype.greeting = function increaseMaxSpeed (newSpeed){
    return `${newSpeed} нова максимальна швидкість`
}
console.log(car1.greeting(220))


// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
Car.prototype.greeting = function changeYear (newValue){
    return `Нова модель ${newValue} року`
}
console.log(car1.greeting(2023))


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function SuperCar (model, producer, year, maxSpeed, engineCapacity, driver, category){
        Car.apply(this, arguments);
        this.driver = driver;
        this.category = category;
    }

let driver = new SuperCar('skoda','ChechRepublic','2021', 180, 2, 'Kozak V.S.', 'B')
console.log(driver)


// Через функцію пропис завдань
//
// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Toyota','Japan','2000',200,2.5);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name: 'Vasya'});
// console.log(car);



// - (Те саме, тільки через клас)
class Auto {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

}


//    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//    максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
let car2 = new Auto ('Peugeot', 'France',2013,150,1.0 );
console.log(car2)


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
Auto.prototype.greeting = function increaseMaxSpeed (newSpeed){
    return `${newSpeed} нова максимальна швидкість`
}
console.log(car2.greeting(170))


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
Auto.prototype.greeting = function info(){
    return `model - ${this.model}
producer - ${this.producer} corporation
year - ${this.year} year
max speed - ${this.maxSpeed} kmh
engine capacity - ${this.engineCapacity} l`
}
console.log(car2.greeting())


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
Auto.prototype.greeting = function increaseMaxSpeed (newSpeed){
    return `${newSpeed} нова максимальна швидкість`
}
console.log(car2.greeting(180))

// -- changeYear (newValue) - змінює рік випуску на значення newValue
//
Auto.prototype.greeting = function changeYear (newValue){
    return `Нова модель ${this.model} ${newValue} року`
}
console.log(car2.greeting(2014))


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class SuperAuto extends Auto {
    constructor(model, producer, year, maxSpeed, engineCapacity, driver, category) {
        super(model, producer, year, maxSpeed, engineCapacity);
        this.driver = driver;
        this.category = category;
    }
}

let driver2 = new SuperAuto('Man','ChechRepublic','2020', 220, 5.0, 'Butko V.S.', 'A')
console.log(driver2)


// Через функцію пропис завдань
// class Car{
//     constructor(model,producer,year,maxSpeed,carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//
//
//     engine () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Toyota','Japan','2000',200,3.4);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name: 'Vasya'});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popels {

    constructor (name, age, size) {
        this.name = name;
        this.age = age;
        this.size= size;
    }

}
let popel1 = new Popels('Ira', 18, 35);
let popel2 = new Popels('Vira', 20, 38);
let popel3 = new Popels('Olya', 19, 34);
let popel4 = new Popels('Popelyushka', 22, 33);
let popel5 = new Popels('Tanya', 21, 36);
let popel6 = new Popels('Natalya', 23, 38);
let popel7 = new Popels('Ulyana', 25, 39);
let popel8 = new Popels('Margaryta', 21, 37);
let popel9 = new Popels('Elizaveta', 19, 36);
let popel10 = new Popels('Anna', 18, 35);

let popelSAll = [popel1, popel2, popel3, popel4, popel5, popel6, popel7, popel8, popel9, popel10]
console.log(popelSAll)

//     Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

}
let princeSearch = new Prince('Artur', 29, 33);
console.log(princeSearch)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
let searchPopel = popelSAll.filter(value => value.size === 33)
console.log(searchPopel)


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
let find = popelSAll.find(value => value.size === princeSearch.shoe)
console.log(find)