// На сторінці user-details.html:
// 4. Вивести всю, без виключення, інформацію про об'єкт user на який клікнули.
// 5. Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6. Кажному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then(posts => {
        const divDetBox = document.createElement('div');
        divDetBox.classList.add('detBox');
        const ul = document.createElement('ul');
        ul.classList.add('ulka');
        for (const post of posts) {
            const li = document.createElement('li');
            li.innerText = post.title;
            li.classList.add('lizka');
            const a = document.createElement('a');
            a.href = `post-details.html?post_id=${post.id}`;
            a.innerText = ' post of current user';
            a.classList.add('aStyle');
            li.appendChild(a);
            ul.appendChild(li);
            divDetBox.append(ul);
        }
        document.body.appendChild(divDetBox);
    });