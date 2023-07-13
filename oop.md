## Constructor and this

```js
const Smith = {
    name: ' Smith',
    age: 40
}
```

```js
function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}
console.log(this)

const Peter = new Person('Peter', 50)
const Alan = new Person('Alan', 20)
```

## Add Function to the constructor

```js
function Person(name, dob) {
    this.name = name
    this.dob = new Date(dob)
    this.calculate_age = function () {
        var diff_ms = Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    console.log(this.calculate_age())
}

const Peter = new Person('Peter', '12-13-1986')
const Alan = new Person('Alan', '5-2-1997')
```

OUTPUT:
```js
33
22
```

## Built in constructor and typeof variable

```js
const name1 = 'Smith';
const name2 = new String("Smith");
name2.age = 18;

console.log(name1, typeof (name1))
//OUTPUT:
Smith String

console.log(name2, typeof (name2))
//OUTPUT:
String {"Smith", age: 18} "object"
```

```js
//to check the data type
if (name1 === "Smith") {
    console.log("Equal")
} else {
    console.log("Different")
}
```

## Other built in constructors 

```js
const num1 = 8;
const num2 = new Number(8);

let item1 = true
let item2 = new Boolean(true)

item1 = { name: 'Smith' }
item2 - new Object({ name: 'Smith' })

item1 = [1, 2, 3, 4]
item2 = new Array(1, 2, 3, 4)

item1 = function (x, y) {
    return x + y;
}
item2 = new Function('x', 'y', 'return x+y')

item1 = /ab+c/;
console.log(item1(3, 4))
console.log(item2(3, 4))
```