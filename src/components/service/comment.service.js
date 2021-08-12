function getComentsOfUser() {
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(value => value.json());
}

function getComentOfUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
        .then(value => value.json());
}

export {getComentsOfUser, getComentOfUser};