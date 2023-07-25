const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
    
]

document.querySelector(".btn-primary").addEventListener('click', nextUser)

function makeUserIterator(users) {
    let nextIndex = 0;
    const userIterator = {
        next: function () {
            let result;
            result = nextIndex < users.length ? { value: users[nextIndex++], done: false } : { done: true }
            return result;
        }
    }
    return userIterator
}
const userIterator = makeUserIterator(users)
nextUser();
function nextUser() {
    const user = userIterator.next().value
    console.log(user)
    if (user !== undefined) {
        document.querySelector('.card-title').innerText = `${user.first_name} ${user.last_name}`;
        document.querySelector('.card-text').innerText = `email: ${user.email}`;
        document.querySelector('.card-img-top').src = user.avatar;
    } else {
        window.location.reload()
    }
}