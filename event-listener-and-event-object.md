#EventListener and Event Object

```js
document.querySelector('#submit-btn').addEventListener('click', onClick)
```

`#submit-btn` is an element in HTML and `click` is what's going to happen when a funcion `onClick` is invoked.

Below is the sample of the function

```js
function onClick(e){
    e.preventDefault()
    let item;
    item = e.target.classList
    item = e.target.className
    item = e.target.timeStamp
    item = e.clientX
    item = e.clientY
    item = e.offsetX
    item = e.offSetY
    e.target.innerText = 'Hello, I am clicked'
    console.log(item)
}
```

The function is called `onClick` and when it is invoked, it will show all what's listed inside the `item`. Also, when the button `#submit-btn` element is `click`ed, it will change the text to `Hello, I am clicked` as shown inside the variable `e.target.innterText`

