const textBox = document.getElementById('textBox')
const toFahrenheit = document.getElementById('toFahrenheit')
const toCelsius = document.getElementById('toCelsius')
const result = document.getElementById('result')
let ans
const clk = document.getElementById('clk').onclick = function convert(){
    if(toFahrenheit.checked) {
        ans = Number(textBox.value)
        ans = Math.floor(ans * 9 / 5 + 32)
        result.textContent = ans + `°F`
    } else if (toCelsius.checked) {
        ans = Number(textBox.value);
        ans = Math.floor((ans - 32) * 5 / 9);
        result.textContent = ans+ '°C';
    } else {
        result.textContent = 'Select a unit';
    }
}
