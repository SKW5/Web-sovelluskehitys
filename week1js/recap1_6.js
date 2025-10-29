const number = parseInt(prompt("Enter a positive integer:"));
    const table = document.createElement("table");
    for (let i = 1; i < number + 1 ; i++) {
        const tr = document.createElement("tr");

        for (let j = 1; j < number + 1; j++) {
            const td = document.createElement("td");
            td.textContent = i * j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
}
    const container = document.getElementById("result");
    container.appendChild(table);
