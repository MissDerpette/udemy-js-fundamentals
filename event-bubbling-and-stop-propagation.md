#Event Bubbling and Event Stop Propagation

 - a term in DOM where the event an element receives is bubbled or transmitted to its parent and ancestors upward in the DOM tree, until it gets to the root. 

```js
document.querySelector('#first_name').addEventListener('click', function (e) {
    e.stopPropagation()
    console.log('first name')
})
```

```js
document.querySelector('.inputform').addEventListener('click', function() {
    console.log('input form')
})
 ```

 ```js
 document.querySelector('.container').addEventListener('click', function() {
    console.log('container')
 })
 ```

 ```js
 document.addEventListener('click', function () {
    console.log('document')
 })
 ```

 To stop from bubbling, use `.stopPropagation()` on the element where you like to stop the bubbling. 