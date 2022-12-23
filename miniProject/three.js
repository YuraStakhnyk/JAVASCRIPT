// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const post_id = url.searchParams.get('post_id');

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
    .then(value => value.json())
    .then(post_id => {
        const divPostBox = document.createElement('div');
        divPostBox.classList.add('postBox');
        const ul = document.createElement('ul');
        ul.classList.add('ulka2');
        for (const post of post_id) {
            const li = document.createElement('li');
            li.classList.add('lizka2');
            const h3 = document.createElement('h3');
            h3.innerText = `${post.id}`;
            const h2 = document.createElement('h2');
            h2.innerText = `${post.name}`;
            const h5 = document.createElement('h5');
            h5.innerText = `${post.email}`;
            const h4 = document.createElement('h4');
            h4.innerText = `${post.body}`;
            li.append(h3, h2, h5, h4);
            ul.appendChild(li);
            divPostBox.appendChild(ul);
        }
        document.body.appendChild(divPostBox);
    });