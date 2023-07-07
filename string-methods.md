#String Methods

```bash
const firstName = "Alan"
const lastName = "Smith "
let val;
```

##Concatenate
```bash
val = firstName + lastName;

output:
"Alan Smith"
```

##Append
```bash
val = "Alan"
val += " Smith"

output:
"Alan Smith"
```

##Escaping
For double quotation:
```bash
val = "That's great that youve found a job!"
```
For single quotation, should have `\` before the character/symbol that you'd like to escape.
```bash
va; = 'That\'s great that you\'ve found a job!'

output: 
'That's great that you've found a job!'
```

##Length
```bash
val = firstName.length

output:
4
```

##Concat
```bash
val = firstName.concat('', lastName)

output:
"Alan Smith"
```

##Change Case
```bash
val = firstName.toUperCase()

output:
ALAN
```
```bash
val2 = lastName.toLowerCase()

output:
smith
```

##Template Literal
```bash
let name = "Alan";
let age = 30;
let drinking = "beer";


let msg = "Hello, my name is " + name + "." + " I love drinking " + drinking + "."

output:
"Hello, my name is Alan. I love drinking beer."
```
```bash
let msg = `Hello, my name is ${name}. I love drinking ${drinking}.

output:
Hello, my name is Alan. I love drinking beer.
```

##Function
```bash
 function drink(age){
    if (age < 18) {
        return 'coke'
    } else {
        return 'beer'
    }
 }

 console.log(drink(20))
 output:
 'beer'

console.log(drink(15))
output:
'coke'

```

```bash
let msg = "Hello, my name is " + name + "!" + " I love drinking " + (age > 18 ? 'beer' : 'coke')

let age = 10;
output: 
"Hello, my name is Alan! I love drinking coke"

let age - 30;
output:
"Hello, my name is Alan! I love drinking beer"
```