// four types of operators
// 1. Assignment operators include = += -= /= //= *= **= %=
// 2. Arithmetice Operators include +,-,/,*,**,%
// 3. Comparison Operator includes ==,!=,===,!==,<,<=,>,>=
// 4. Logical Operator which are the and(&&)  or(||)
// var num1 = 7
// var num2 = 5
// add= num1+num2
// console.log(`${num1} + ${num2} = ${add}`)
// subtract= num1-num2
// console.log(`${num1} - ${num2} = ${subtract}`)
// multiply= num1*num2
// console.log(`${num1} * ${num2} = ${multiply}`)
// divide= num1/num2
// console.log(`${num1} / ${num2} = ${divide}`)
// exponential= num1**num2
// console.log(`${num1} ** ${num2} = ${exponential}`)
// modulus= num1%num2
// console.log(`${num1} % ${num2} = ${modulus}`)
// equal= num1==num2
// console.log(`${num1} == ${num2} = ${equal}`)
// notequal= num1!=num2
// console.log(`${num1} != ${num2} = ${notequal}`)

// // var a = 7
// // a+=4
// // console.log(a)
// // a-=3
// // console.log(a)
// // a/=2
// // console.log(a)

// var a = 7
// a+=2
// console.log(a)
// a/=3
// console.log(a)
// a+=2
// console.log(a)
// Comparison Operator
// var name = 'John'
// var age = 20
// console.log(name=='John')
// console.log(age< 20)
// console.log(age> 20)
// console.log(age<= 20)
// console.log(age>= 20)
// var price = '50'
// console.log(price == 50)
// console.log(price === 50)
// console.log(price != 50)
// console.log(price !== 50)
// Logical Operator
var name = 'John'
var age = 20
console.log(name=='John' && age==20)
console.log(name=='Johnson' && age==20)
console.log(name=='John' && age==29)
console.log(name=='Wilson' && age==50)

console.log(name=='John' || age==20)
console.log(name=='Johnson' || age==20)
console.log(name=='John' || age==29)
console.log(name=='Wilson'||age==50)
// Unary Operator
a=5
a++
console.log(a)
a--
console.log(a)