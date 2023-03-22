const sum = (num1, num2) => num1 + num2
// Callback Function
const calc = (num1, num2, callback) => callback(num1, num2)
// Calling to the callback function 
console.log(calc(2, 2, sum))

setTimeout(_ => console.log('Hello World'), 5000)

const greet = name => console.log(`Hello ${name} how are you today?`)
const greeting = (name, callback) => callback(name)

setTimeout(greet, 2000, 'Joe')

export { sum, calc }
