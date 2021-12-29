//creating a constant variable and setting it to 293
const kelvin = 0;
//new constant variable that converts kelvin to celsius
const celsius = kelvin - 273;
//new variable that converts celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounding our fahrenheit value down using Math.floor()
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)