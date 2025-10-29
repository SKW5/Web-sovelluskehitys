const numbers = [];

let condition = true;
while (condition) {
    const input = prompt("Enter integer or 'done' to stop")

    if (input.toLowerCase() === "done") {
        condition = false;
        document.getElementById("result").innerHTML = `Even numbers: ${numbers}`;
        break;
    }

    const num = parseInt(input);
    numbers.push(num);

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 !== 0) {
            numbers.splice(i, 1);
        }
    }
}