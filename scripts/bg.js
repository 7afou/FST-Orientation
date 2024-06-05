function calculateResults() {
    const biologieS1 = parseFloat(document.getElementById('biologieS1').value) || 0;
    const biologieS2 = parseFloat(document.getElementById('biologieS2').value) || 0;
    const geologieS1 = parseFloat(document.getElementById('geologieS1').value) || 0;
    const geologieS2 = parseFloat(document.getElementById('geologieS2').value) || 0;
    const chimieS1 = parseFloat(document.getElementById('chimieS1').value) || 0;
    const chimieS2 = parseFloat(document.getElementById('chimieS2').value) || 0;
    const mathS1 = parseFloat(document.getElementById('mathS1').value) || 0;
    const mathS2 = parseFloat(document.getElementById('mathS2').value) || 0;
    const generalS1 = parseFloat(document.getElementById('generalS1').value) || 0;
    const generalS2 = parseFloat(document.getElementById('generalS2').value) || 0;

    const IPG = (geologieS1 + geologieS2 + chimieS1 + chimieS2 + mathS1 + mathS2 + generalS1 + generalS2) / 8;
    const ABC = (biologieS1 + biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 6;
    const NS = (2 * biologieS1 + 2 * biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 8;
    const TAS = (2 * biologieS1 + 2 * biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 8;
    const Biologie = (biologieS1 + biologieS2 + generalS1 + generalS2) / 4;
    const Geologie = (geologieS1 + geologieS2 + chimieS1 + generalS1 + generalS2) / 5;
    const _2P2E = (mathS1 + mathS2 + 2 * chimieS1 + 2 * chimieS2 + generalS1 + generalS2) / 8;

    document.getElementById('results').innerHTML = `
        <div class="result-item"><p>IPG | ${IPG.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>ABC | ${ABC.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>NS | ${NS.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TAS | ${TAS.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Biologie | ${Biologie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Geologie | ${Geologie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>2P2E | ${_2P2E.toFixed(4)} / 20</p></div>
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
