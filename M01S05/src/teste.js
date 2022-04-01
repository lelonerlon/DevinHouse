const number = 2000;
number.toLocaleString('en-IN', {style: 'currency',currency: 'INR', minimumFractionDigits: 2})
console.log(number);