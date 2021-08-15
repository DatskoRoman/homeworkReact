
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

function getCommentOfUser(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json());
}

export { getCommentsOfUser, getCommentOfUser, getPostOfUser, getPostsOfUser};