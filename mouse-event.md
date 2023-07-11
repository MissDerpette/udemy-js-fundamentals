# Mouse Event
## mouseover, mouseout, mouseleave, mouseenter

```js
const form = document.querySelector('form')

form.addEventListener('mouseover', run)
form.addEventListener('mouseout', run)
form.addEventListener('mouseenter', run)
form.addEventListener('mouseleave', run)
function run(e) {
    e.preventDefault();
}
```

### mouseover
- triggered when cursor is moved from an element to a button

### mouseout
- triggered when cursor is moved from an element, to child, then outside of an element

### mouseEnter / mouseLeave
- are triggered when a cursor entered or exited an element

## click, dbclick, mousedown, mouseup, mousemove

```js
const submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener('click', run)
submitBtn.addEventListener('dbclick', run)
submitBtn.addEventListener('mousedown', run)


function run(e) {
    e.preventDefault();
}
```

### click
- when a button needs to be clicked

### dbclick
- when a button needs to be double clicked

### mousedown
- when a button is on hold, pressed down

### mouseup
- when a button is on hold and released

### mousemove
- when a cursor is moved.. the element in header will be replaced by the location of when the cursor is. 
  
  
   header.textContent = `x: ${e.offsetX} y: ${e.offsetY}` 

   will replace the text in header

```js
const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn')
const header = document.quesrySelector('h3')

submitBtn.addEventListener('mousemove', run)

function run(e) {
    e.preventDefault();
    header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`
}
```