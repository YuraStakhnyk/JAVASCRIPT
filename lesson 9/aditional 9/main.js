
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//

    // let arr = [];
    // for (let i = 0; i < users.length; i++) {
    // let user = users[i]
    // arr.push(user.address)
    // }
    // console.log(arr)

    // for (const user of users) {
    // let div = document.createElement('div');
    //     div.innerText = `${user.address.city} - ${user.address.country} - ${user.address.street} - ${user.address.houseNumber}`
    //     div.style.border = `2px solid silver`
    //     div.style.margin = `10px`
    //     document.body.append(div)
    // }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//   Всі данні в одному блоці.
//

    // for (const user of users) {
    //
    //     let div = document.createElement('div')
    //     div.innerText = `${user.name} ${user.age} ${user.status}`
    //
    //     let divAdress = document.createElement('divAdress')
    //     divAdress.innerText = `${user.address.city} - ${user.address.country} - ${user.address.street} - ${user.address.houseNumber}`;
    //
    //     let box = document.createElement('div')
    //     box.append(div, divAdress)
    //     box.style.border = `2px solid black`
    //     box.style.margin = `10px`
    //
    //     document.body.append(box)
    // }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
//   розділивши всі властивості по своїм блокам (div>div*4)
//
//     for (const user of users) {
//
//         let name = document.createElement('div');
//         name.innerText = `${user.name}`;
//
//         let age = document.createElement("div");
//         age.innerText = `${user.age}`;
//
//         let status = document.createElement('div');
//         status.innerText = `${user.status}`;
//
//         let ul = document.createElement('ul');
//
//         let li1 = document.createElement('li');
//         li1.innerText = `${user.address.country}`;
//         ul.append(li1)
//
//         let li2 = document.createElement('li');
//         li2.innerText = `${user.address.city}`;
//         ul.append(li2)
//
//         let li3 = document.createElement('li');
//         li3.innerText = `${user.address.street}`;
//         ul.append(li3)
//
//         let li4 = document.createElement('li');
//         li4.innerText = `${user.address.houseNumber}`;
//         ul.append(li4)
//
//         let box = document.createElement('div');
//         box.append(name, age, status, ul)
//         box.style.border = `2px solid blue`
//         document.body.append(box)
//     }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//   розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//

        // for (const rule of rules) {
        //
        //     let h2 = document.createElement('h2');
        //     h2.innerText = `${rule.title}`;
        //
        //     let p = document.createElement('p');
        //     p.innerText = `${rule.body}`
        //
        //     let ul = document.createElement('ul')
        //     ul.classList.add('id')
        //     ul.append(h2)
        //
        //     let li = document.createElement('li');
        //     li.appendChild(p);
        //
        //     document.body.append(ul, li)
        //
        // }


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
