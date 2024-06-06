function calculateResults() {
    const mathS1 = parseFloat(document.getElementById('mathS1').value) || 0;
    const mathS2 = parseFloat(document.getElementById('mathS2').value) || 0;
    const physiqueS1 = parseFloat(document.getElementById('physiqueS1').value) || 0;
    const physiqueS2 = parseFloat(document.getElementById('physiqueS2').value) || 0;
    const infoS1 = parseFloat(document.getElementById('infoS1').value) || 0;
    const infoS2 = parseFloat(document.getElementById('infoS2').value) || 0;
    const generalS1 = parseFloat(document.getElementById('generalS1').value) || 0;
    const generalS2 = parseFloat(document.getElementById('generalS2').value) || 0;

    const MIAGE = (2 * infoS1 + 2 * infoS2 + generalS1 + generalS2) / 6;
    const DA2I = (2 * infoS1 + 2 * infoS2 + generalS1 + generalS2) / 6;
    const MAI = (2 * mathS1 + 2 * mathS2 + generalS1 + generalS2) / 6;
    const EEA = (2 * physiqueS1 + 2 * physiqueS2 + mathS1 + mathS2 + generalS1 + generalS2) / 8;
    const TSER = (2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 6;
    const PF = (mathS1 + mathS2 + 2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 8;

    document.getElementById('results').innerHTML = `
        <div class="result-item"><p>MIAGE | ${MIAGE.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>DA2I | ${DA2I.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>MAI | ${MAI.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>EEA | ${EEA.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TSER | ${TSER.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>PF | ${PF.toFixed(4)} / 20</p></div>
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
