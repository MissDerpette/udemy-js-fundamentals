 # Event Delegation

 way to go up or down the tree/nodes/elements

```js
document.dody.addEventListener('click', addFavorite)

function addFavorite(e){
    console.log(e.target)
    if (e.target.parentElement.classList.contains('add-favorite')) {
        if (e.target.parentElement.parentElement.style ['background-color'] == 'yellow') {
            e.target.parentElement.parentElement.style['background-color'] = 'white'
        } else {
            e.target.parentElement.parentElement.style['background-color'] = 'yellow'
        }

    }
}
```
the first `if` is for calling all elements that contains `'add-favorite'` as classlist. Now, the second `if` is for condition. That if an element that contains `add-favorite` and has a `background-color: 'yellow'`, it should be changed to `background-color: 'white'`. The else statement will revert it to `background:color 'yellow'`