# JSON Stringify 

```js
documnt.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('first_name').value;

    let names;
    if (localStorage.getItem('names') === numm){
        names = []
    } else {
        names =JSON.parse(localStorage.getItem('names'))
    }
    names.push(name)
    localStorage.setItem('names', JSON.stringify(names)
    )
    alert('The name is saved')
})

document.querySelector('.get-btn').addEventListener('click', function(e) {
    e.preventDefault()
    const names = JSON.parse(localStorage.getItem('names'))
    names.forEach(function (name)) {
        console.log(name)
    }
})
```

