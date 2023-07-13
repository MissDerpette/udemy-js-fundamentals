# Local Storage and Session Storage


```js
//setting localStorage
localStorage.setItem("name", "localSmith")
localStorage.setItem("age", "17")
```

`localStorage` will be shared between tabs, even page is refreshed, data will remain.

```js
//setting sessionStorage
sessionStorage.setItem("name", "SessionSmith")
```

```sessionStorage``` data will be deleted when a page refreshes. 

```js
const age = localStorage.getItem('age')
const localName = localStorage.getItem('name')
const sessionName = sessionStorage.getItem('name')
```
```js
console.log('age: ', age)
console.log('localName: ', localName)
console.log('sessionName: ', sessionName)
```

To remove a specific key in storage, use `.removeItem()`, but to clear everthing, use `.clear()`

```js
localStorage.removeItem('name')
localStorage.clear()
```