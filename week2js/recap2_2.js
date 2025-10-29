const numbers = [];

for (let i =  0; i < 5; i++) {
    const integer = prompt("give integer: ")
    numbers.push(integer);
}

console.log(numbers)
const p = document.createElement("p");
p.textContent = numbers;
document.body.appendChild(p);

const include = prompt("check integer if included: ")
if (numbers.includes(include)) {
    const p = document.createElement("p");
    p.textContent = `number ${include} is found in the array`;
    document.body.appendChild(p);
} else {
    const p = document.createElement("p");
    p.textContent = `number ${include} does not exist`;
    document.body.appendChild(p);
}

numbers.pop(numbers.length - 1);
console.log(numbers);

const p2 = document.createElement("p");
p2.textContent = numbers;
document.body.appendChild(p2);


numbers.reverse((a, b) => b - a);
console.log(numbers);
const p3 = document.createElement("p");
p3.textContent = numbers;
document.body.appendChild(p3);