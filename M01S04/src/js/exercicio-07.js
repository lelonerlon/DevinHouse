const celsius = [0, 32, 45, 50, 75, 80, 99, 120];
let fahrenheit = [];

fahrenheit = celsius.map(function (elem) {
    return ((elem * 9 / 5) + 32)
})

console.log(fahrenheit)