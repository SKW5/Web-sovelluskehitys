const container = document.getElementById("results");
const array = ["apple", "banana", "orange", "grape", "kiwi"];

const p  = document.createElement("p");
p.textContent = `Fruits: ${array}`;
console.log(p);

const p2 = document.createElement("p");
p2.textContent = `Length of Fruits: ${array.length}`;
console.log(p2);

const p3 = document.createElement("p");
p3.textContent = `Element at Index 2: ${array[2]}`
console.log(p3);

const p4 = document.createElement("p");
p4.textContent = `Last Element of Fruits ${array[array.length - 1]}`;
console.log(p4)

const array2 = [];
array2.push("carrot")
array2.push("broccoli")
array2.push("cabbage")

console.log(array2)
console.log(array2.length);

container.append(p, p2, p3, p4)
