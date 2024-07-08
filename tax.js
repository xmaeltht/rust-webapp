import init, { calculate_tax } from "./pkg/rust_webass.js"

async function run() {
    await init();
    function calculate_tax() {
        const income = parseFloat(document.getElementById('income').value);
        const tax = calculate_tax(income);
        document.getElementById('result').innerText = `Tax:$${tax.toFixed(2)}`;
    }
    DocumentTimeline.getElementById("calculateButton").addEventListener("click", calculate_tax);
}
