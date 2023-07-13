# querySelector and querySelectorAll vs getElementsByClassName and getElementById

## Main Differences:

- `querySelector` is more flexible, as you can pass it any CSS3 selector, not just simple ones for id, tag, or class.

- The performance of `querySelector` changes with the size of the DOM that it is invoked on.* To be precise, `querySelector`* calls run in O(n) time and `getElement`* calls run in O(1) time, where n is the total number of all children of the element or document it is invoked on. This fact seems to be the least well-known, so I am bolding it.

- `getElement`* calls return direct references to the DOM, whereas `querySelector`* internally makes copies of the selected elements before returning references to them. These are referred to as "live" and "static" elements. This is NOT strictly related to the types that they return. There is no way I know of to tell if an element is live or static programmatically, as it depends on whether the element was copied at some point, and is not an intrinsic property of the data. Changes to live elements apply immediately - changing a live element changes it directly in the DOM, and therefore the very next line of JS can see that change, and it propagates to any other live elements referencing that element immediately. Changes to static elements are only written back to the DOM after the current script is done executing. These extra copy and write steps have some small, and generally negligible, effect on performance.

- The return types of these calls vary. `querySelector` and `getElementById` both return a single element. `querySelectorAll` and `getElementsByName` both return NodeLists, being newer functions that were added after HTMLCollection went out of fashion. The older `getElementsByClassName` and `getElementsByTagName` both return HTMLCollections. Again, this is essentially irrelevant to whether the elements are live or static.

These concepts are summarized in the following table.
```js
Function               | Live? | Type           | Time Complexity
querySelector          |   N   | Element        |  O(n)
querySelectorAll       |   N   | NodeList       |  O(n)
getElementById         |   Y   | Element        |  O(1)
getElementsByClassName |   Y   | HTMLCollection |  O(1)
getElementsByTagName   |   Y   | HTMLCollection |  O(1)
getElementsByName      |   Y   | NodeList       |  O(1)
```

## Details, Tips, and Examples
- HTMLCollections are not as array-like as NodeLists and do not support `.forEach()`. I find the spread operator useful to work around this:
```js
[...document.getElementsByClassName("someClass")].forEach()
```

- Every element, and the global `document`, have access to all of these functions except for `getElementById` and `getElementsByName`, which are only implemented on `document`.

