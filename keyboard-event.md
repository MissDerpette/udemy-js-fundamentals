# Keyboard Event
### keypress, keyup and keydown

```js
const firstNameInput = documentgetElementById('first_name')
firstNameInput.addEventListener('keydown', run)
firstNameInput.addEventListener('keyup', run)
firstNameInput.addEventListener('keypress', run)

function run(e) {
    console.log('Event Type:' + e.type + e.keyCode)
}
```

The `keydown` and `keyup` events provide a code indicating which key is pressed, while `keypress` indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup , but as 97 by keypress . An uppercase "A" is reported as 65 by all events.

### cut, copy, paste, input, focus and blur
```js
const firstNameInput = documentgetElementById('first_name')
firstNameInput.addEventListener('focus', run)
firstNameInput.addEventListener('blur', run)
firstNameInput.addEventListener('cut', run)
firstNameInput.addEventListener('paste', run)
firstNameInput.addEventListener('copy', run)

function run(e) {
    console.log('Event Type:' + e.type)
}
```

triggers when a key in keyboard is pressed -- self-explanatory. `focus` is when an input field is highlighted, `blur` is when not. `cut`, `copy`, and `paste` is self-explanatory. 

### input 
```js
const firstNameInput = documentgetElementById('first_name')
const heading = document.querySelector('h3')
firstNameInput.addEventListener('input', run)
function run(e) {
    console.log('Event Type:' + e.type)
    heading.innerText = e.target.value
}
```

anything typed in the input field will show in the header