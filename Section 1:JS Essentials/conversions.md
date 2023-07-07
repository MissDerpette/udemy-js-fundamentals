#Convert Different Data Types to String

##Number to String

```bash
let val = 999
val = String(val)

output:
'999'
```

##Boolean to String
```bash
val = true
val = String(val)

output:
'true'
```

##Date to String
```bash
val = new Date()
val = val.toString()

output:
'Fri Jul 07 2023 22:29:55 GMT+0800 (Philippine Standard Time)'
```

##Array to String

```bash
val = [1, 2, 3];
val = val.toString()

output:
'1, 2, 3'
```

#Convert Different Data Types to Numbers

##String to Number
```bash
val = '8'
val = Number(val)

output:
8
```

##Boolean to Number
```bash
val = true
val = Number(val)

output:
1
```
```bash
val = false
val = Number(val)

output:
0
```

##Both false and null is 0
```bash
val = parseInt('12.34')

output:
12
```
```bash
val = parseFloat('12.34')

output
12.34
```