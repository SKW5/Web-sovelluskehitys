function calculate(input) {
    const fahrenheit = (input * 9/5) + 32;
    const kelvin = input + 273.15;
    return {fahrenheit, kelvin};
}
function convert() {
    const inputs = document.getElementById("input").value;
    const input = parseFloat(inputs);
    const { fahrenheit, kelvin } = calculate(input);
    document.getElementById("result").textContent = `${fahrenheit} fahrenheit. ${kelvin} kelvin`;
}