const users = new Map();
users.set('Michael Lawson', { 'job title': 'Programmer', 'email': 'michael.lawson@reqres.in' })
users.set('Lindsay Ferguson', { 'job title': 'Programmer', 'email': 'lindsay.ferguson@reqres.in' })
users.set('Tobias Funke', { 'job title': 'Programmer', 'email': 'tobias.funke@reqres.in' })


console.log(users)

for (const [key, user] of users) {
    console.log(`${key}: ${user['job title']}`)
}
console.log('- - - -')
for (const key of users.keys()) {
    console.log(key)
}