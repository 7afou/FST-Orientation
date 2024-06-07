function convertCommaToDot(strNum) {
    // Check if the input string contains a comma
    if (strNum.includes(",")) {
        // Replace the comma with a dot and return the updated string
        return strNum.replace(",", ".");
    } else {
        // Return the original string if it doesn't contain a comma
        return strNum;
    }
}

function calculateResults() {
    // Get the input values and convert commas to dots
    const chimieS1 = parseFloat(convertCommaToDot(document.getElementById('chimieS1').value)) || 0;
    const chimieS2 = parseFloat(convertCommaToDot(document.getElementById('chimieS2').value)) || 0;
    const physiqueS1 = parseFloat(convertCommaToDot(document.getElementById('physiqueS1').value)) || 0;
    const physiqueS2 = parseFloat(convertCommaToDot(document.getElementById('physiqueS2').value)) || 0;
    const mathS1 = parseFloat(convertCommaToDot(document.getElementById('mathS1').value)) || 0;
    const mathS2 = parseFloat(convertCommaToDot(document.getElementById('mathS2').value)) || 0;
    const generalS1 = parseFloat(convertCommaToDot(document.getElementById('generalS1').value)) || 0;
    const generalS2 = parseFloat(convertCommaToDot(document.getElementById('generalS2').value)) || 0;

    const IPG = (chimieS1 + chimieS2 + physiqueS1 + physiqueS2 + generalS1 + generalS2) / 6;
    const ABC = (2 * chimieS1 + 2 * chimieS2 + generalS1 + generalS2) / 6;
    const Chimie = (2 * chimieS1 + 2 * chimieS2 + generalS1 + generalS2) / 6;
    const EEA = (2 * physiqueS1 + 2 * physiqueS2 + mathS1 + mathS2 + generalS1 + generalS2) / 8;
    const TSER = (2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 6;
    const PF = (chimieS1 + chimieS2 + 2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 8;
    const SP = (mathS1 + mathS2 + 2 * physiqueS1 + 2 * physiqueS2 + 2 * chimieS1 + 2 * chimieS2 + generalS1 + generalS2) / 12;
    const _2P2E = (2 * chimieS1 + 2 * chimieS2 + physiqueS1 + physiqueS2 + generalS1 + generalS2) / 8;

    document.getElementById('results').innerHTML = `
        <div class="result-item"><p>IPG | ${IPG.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>ABC | ${ABC.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Chimie | ${Chimie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>EEA | ${EEA.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TSER | ${TSER.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>PF | ${PF.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>SP | ${SP.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>2P2E | ${_2P2E.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="resetForm()">Recommencer</button>
    `;

    document.getElementById('input-section').style.display = 'none';
    document.getElementById('calculate-button').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    window.scrollTo(0, 0);
}

function resetForm() {
    document.getElementById('input-section').style.display = 'grid';
    document.getElementById('calculate-button').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.querySelectorAll('input').forEach(input => input.value = '');
}
