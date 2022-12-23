// В index.html
// 1. Отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід  на сторінку user-details.html,
//    котра має детальну інфорацію про об'єкт на який клікнули.

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        const div2 = document.createElement('div');
        div2.classList.add('box');
        for (const user of users) {
            const div = document.createElement('div');
            div.innerText =`${user.id} ${user.name}`;
            div.classList.add('divMain');
            const a = document.createElement('a');
            a.classList.add('ashka');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = ' posts of user';
            div.appendChild(a);
            div2.append(div);
        }
        document.body.appendChild(div2);
    });