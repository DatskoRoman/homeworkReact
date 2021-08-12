function getPostsOfUser() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json());
}

function getPostOfUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json());
}

export {getPostsOfUser, getPostOfUser };