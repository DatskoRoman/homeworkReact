
function getPostsOfUser() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json());
}

function getPostOfUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json());
}

function getCommentsOfUser() {
    return fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(value => value.json());
}

function getCommentOfUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
        .then(value => value.json());
}

export {getPostOfUser, getPostsOfUser, getCommentsOfUser, getCommentOfUser};