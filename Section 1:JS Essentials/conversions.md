# Convert Different Data Types to String

## Number to String

```js
let val = 999
val = String(val)

output:
'999'
```

## Boolean to String
```js
val = true
val = String(val)

output:
'true'
```

## Date to String
```js
val = new Date()
val = val.toString()

output:
'Fri Jul 07 2023 22:29:55 GMT+0800 (Philippine Standard Time)'
```

## Array to String

```js
val = [1, 2, 3];
val = val.toString()

output:
'1, 2, 3'
```

# Convert Different Data Types to Numbers

## String to Number
```js
val = '8'
val = Number(val)

output:
8
```

## Boolean to Number
```js
val = true
val = Number(val)

output:
1
```
```js
val = false
val = Number(val)

output:
0
```

## Both false and null is 0
```js
val = parseInt('12.34')

output:
12
```
```js
val = parseFloat('12.34')

output
12.34
```