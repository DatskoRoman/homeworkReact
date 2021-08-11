
function getUsers() {
  return   fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());
}

function getUser(id) {
    return   fetch('https://jsonplaceholder.typicode.com/users/'+ id)
        .then(value => value.json());
}
function getPostsOfUser() {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(value => value.json());
}

function getPostOfUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json());
}

export {getUsers, getUser, getPostOfUser, getPostsOfUser};