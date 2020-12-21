# @datafire/math_tools

Client library for Numbers API

## Installation and Usage
```bash
npm install --save @datafire/math_tools
```
```js
let math_tools = require('@datafire/math_tools').create({
  "X-Mathtools-Api-Secret": ""
});

.then(data => {
  console.log(data);
});
```

## Description

All about Numbers. REST access with json/xml/jsonp result support. Below is the documentation for the Numbers API. You can try them out right here. Find more information and subscribe at [math.tools](https://math.tools/api/numbers/)  


## Actions

### numbers.base.get
Convert a given number from one base to another base


```js
math_tools.numbers.base.get({
  "number": 0,
  "to": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number to convert to the target base
  * from `integer`: Base of the supplied number (Optional base 10 assumed by default)
  * to **required** `integer`: Target base to convert to

#### Output
*Output schema unknown*

### numbers.base.binary.get
Convert a given number to binary


```js
math_tools.numbers.base.binary.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number to convert to binary
  * from `integer`: Base of the supplied number (Optional base 10 assumed by default)

#### Output
*Output schema unknown*

### numbers.base.hex.get
Convert a given number to hexadecimal


```js
math_tools.numbers.base.hex.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number to convert to hex
  * from `integer`: Base of the supplied number (Optional base 10 assumed by default)

#### Output
*Output schema unknown*

### numbers.base.octal.get
Convert a given number to octal


```js
math_tools.numbers.base.octal.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number to convert to octal
  * from `integer`: Base of the supplied number (Optional base 10 assumed by default)

#### Output
*Output schema unknown*

### numbers.cardinal.get
Get the cardinal of the given number


```js
math_tools.numbers.cardinal.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number value
  * language `string`: Language to use

#### Output
*Output schema unknown*

### numbers.currency.get
Spells out the number as a currency


```js
math_tools.numbers.currency.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to spell
  * language `string`: Language to use

#### Output
*Output schema unknown*

### numbers.fact.get
Get a random fact about a number


```js
math_tools.numbers.fact.get({
  "number": 0
}, context)
```

#### Input
* input `object`
  * number **required** `integer`: Number value

#### Output
*Output schema unknown*

### numbers.is_cube.get
Checks whether a given number is a cube number or not.


```js
math_tools.numbers.is_cube.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.is_palindrome.get
Checks whether a given number is a palindrome number or not.


```js
math_tools.numbers.is_palindrome.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.is_square.get
Checks whether a given number is a square number or not.


```js
math_tools.numbers.is_square.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.is_triangle.get
Checks whether a given number is a triangle number or not.


```js
math_tools.numbers.is_triangle.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.nod.get
Get the number of the day for current day


```js
math_tools.numbers.nod.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### numbers.numeral.chinese.get
Convert base 10 representation of a given number to chinese numeral.


```js
math_tools.numbers.numeral.chinese.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to convert

#### Output
*Output schema unknown*

### numbers.numeral.egyptian.get
Convert base 10 representation of a given number to egyptian numeral.


```js
math_tools.numbers.numeral.egyptian.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to convert

#### Output
*Output schema unknown*

### numbers.numeral.roman.get
Convert base 10 representation of a given number to roman numeral.


```js
math_tools.numbers.numeral.roman.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to convert

#### Output
*Output schema unknown*

### numbers.ordinal.get
Get the ordinal of the given number


```js
math_tools.numbers.ordinal.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number value

#### Output
*Output schema unknown*

### numbers.pi.get
Get digits of pi (Ï€)


```js
math_tools.numbers.pi.get({}, context)
```

#### Input
* input `object`
  * from `integer`: Optional start position
  * to `integer`: Optional start position

#### Output
*Output schema unknown*

### numbers.prime.factors.get
Get the prime factors of a given number.


```js
math_tools.numbers.prime.factors.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to get the factors

#### Output
*Output schema unknown*

### numbers.prime.is_fermat_prime.get
Checks whether a given number is a known fermat prime number or not.


```js
math_tools.numbers.prime.is_fermat_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_fibonacci_prime.get
Checks whether a given number is a known fibonacci prime number or not.


```js
math_tools.numbers.prime.is_fibonacci_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_mersenne_prime.get
Checks whether a given number is a known mersenne prime number or not.


```js
math_tools.numbers.prime.is_mersenne_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_partition_prime.get
Checks whether a given number is a known partition prime number or not.


```js
math_tools.numbers.prime.is_partition_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_pell_prime.get
Checks whether a given number is a known pell prime number or not.


```js
math_tools.numbers.prime.is_pell_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_perfect.get
Checks whether a given number is a perfect number or not.


```js
math_tools.numbers.prime.is_perfect.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.prime.is_prime.get
Checks whether a given number is a known prime number or not.


```js
math_tools.numbers.prime.is_prime.get({}, context)
```

#### Input
* input `object`
  * number `integer`: Number to check

#### Output
*Output schema unknown*

### numbers.random.get
Generate random number(s)


```js
math_tools.numbers.random.get({}, context)
```

#### Input
* input `object`
  * min `integer`: Minimum Number value in the range
  * max `integer`: Maximum Number value
  * total `integer`: Total number of random numbers to generate. Defaults to 1

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
