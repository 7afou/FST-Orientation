let currentType = '';

function showInputs(type) {
    currentType = type;
    document.getElementById('selection-box').classList.add('hidden');
    document.getElementById('footer-text').classList.add('hidden');
    document.getElementById('inputs').innerHTML = generateInputs(type);
    document.getElementById('inputs').classList.remove('hidden');
    document.getElementById('FST').innerHTML = `Les Orientations du ${type}`;
}

function generateInputs(type) {
    let html = '';
    switch (type) {
        case 'BG':
            html += `
            <p align="center">Veuillez entrer les résultats de la première session seulement.</p>
            <input type="text" id="biologieS1" placeholder="Moyenne Module Biologie [S1]">
            <input type="text" id="biologieS2" placeholder="Moyenne Module Biologie [S2]">
            <input type="text" id="geologieS1" placeholder="Moyenne Module Géologie [S1]">
            <input type="text" id="geologieS2" placeholder="Moyenne Module Géologie [S2]">
            <input type="text" id="chimieS1" placeholder="Moyenne Module Chimie [S1]">
            <input type="text" id="chimieS2" placeholder="Moyenne Module Chimie [S2]">
            <input type="text" id="mathS1" placeholder="Moyenne Module Math - Physique [S1]">
            <input type="text" id="mathS2" placeholder="Moyenne Module Math - Physique [S2]">
            <input type="text" id="generalS1" placeholder="Moyenne Générale [S1]">
            <input type="text" id="generalS2" placeholder="Moyenne Générale [S2]">
            <button id="calculate-button" onclick="calculate()">Calculer</button>    
            `;
            break;
        case 'PC':
            html += `
            <p align="center">Veuillez entrer les résultats de la première session seulement.</p>
            <input type="text" id="chimieS1" placeholder="Moyenne Module Chimie [S1]">
            <input type="text" id="chimieS2" placeholder="Moyenne Module Chimie [S2]">
            <input type="text" id="physiqueS1" placeholder="Moyenne Module Physique [S1]">
            <input type="text" id="physiqueS2" placeholder="Moyenne Module Physique [S2]">
            <input type="text" id="mathS1" placeholder="Moyenne Module Math [S1]">
            <input type="text" id="mathS2" placeholder="Moyenne Module Math [S2]">
            <input type="text" id="generalS1" placeholder="Moyenne Générale [S1]">
            <input type="text" id="generalS2" placeholder="Moyenne Générale [S2]">
            <button id="calculate-button" onclick="calculate()">Calculer</button>    
            `;
            break;
        case 'MPI':
            html += `
            <p align="center">Veuillez entrer les résultats de la première session seulement.</p>
            <input type="text" id="mathS1" placeholder="Moyenne Module Math [S1]">
            <input type="text" id="mathS2" placeholder="Moyenne Module Math [S2]">
            <input type="text" id="physiqueS1" placeholder="Moyenne Module Physique [S1]">
            <input type="text" id="physiqueS2" placeholder="Moyenne Module Physique [S2]">
            <input type="text" id="infoS1" placeholder="Moyenne Module Informatique [S1]">
            <input type="text" id="infoS2" placeholder="Moyenne Module Informatique [S2]">
            <input type="text" id="generalS1" placeholder="Moyenne Générale [S1]">
            <input type="text" id="generalS2" placeholder="Moyenne Générale [S2]">
            <button id="calculate-button" onclick="calculate()">Calculer</button>    
            `;
            break;
        default:
            break;
    }
    return html;
}

// forgot to mention that convertCommaToDot() is stolen from khalil
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

function calculate() {
    let resultsHTML = ''; 
    switch (currentType) {
        case 'BG':
            resultsHTML = calculateResultsBG(); 
            break;
        case 'PC':
            resultsHTML = calculateResultsPC(); 
            break;
        case 'MPI':
            resultsHTML = calculateResultsMPI(); 
            break;
        default:
            break;
    }
    document.getElementById('inputs').innerHTML = '';
    document.getElementById('inputs').classList.remove('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').innerHTML += resultsHTML;
}

function calculateResultsBG() {
    const biologieS1 = parseFloat(convertCommaToDot(document.getElementById('biologieS1').value)) || 0;
    const biologieS2 = parseFloat(convertCommaToDot(document.getElementById('biologieS2').value)) || 0;
    const geologieS1 = parseFloat(convertCommaToDot(document.getElementById('geologieS1').value)) || 0;
    const geologieS2 = parseFloat(convertCommaToDot(document.getElementById('geologieS2').value)) || 0;
    const chimieS1 = parseFloat(convertCommaToDot(document.getElementById('chimieS1').value)) || 0;
    const chimieS2 = parseFloat(convertCommaToDot(document.getElementById('chimieS2').value)) || 0;
    const mathS1 = parseFloat(convertCommaToDot(document.getElementById('mathS1').value)) || 0;
    const mathS2 = parseFloat(convertCommaToDot(document.getElementById('mathS2').value)) || 0;
    const generalS1 = parseFloat(convertCommaToDot(document.getElementById('generalS1').value)) || 0;
    const generalS2 = parseFloat(convertCommaToDot(document.getElementById('generalS2').value)) || 0;

    const IPG = (geologieS1 + geologieS2 + chimieS1 + chimieS2 + mathS1 + mathS2 + generalS1 + generalS2) / 8;
    const ABC = (biologieS1 + biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 6;
    const NS = (2 * biologieS1 + 2 * biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 8;
    const TAS = (2 * biologieS1 + 2 * biologieS2 + chimieS1 + chimieS2 + generalS1 + generalS2) / 8;
    const Biologie = (biologieS1 + biologieS2 + generalS1 + generalS2) / 4;
    const Geologie = (geologieS1 + geologieS2 + chimieS1 + generalS1 + generalS2) / 5;
    const _2P2E = (mathS1 + mathS2 + 2 * chimieS1 + 2 * chimieS2 + generalS1 + generalS2) / 8;

    const resultsHTML = `
        <div class="result-item"><p>IPG | ${IPG.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>ABC | ${ABC.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>NS | ${NS.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TAS | ${TAS.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Biologie | ${Biologie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Geologie | ${Geologie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>2P2E | ${_2P2E.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}


function calculateResultsPC() {
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


    const resultsHTML = `
        <div class="result-item"><p>IPG | ${IPG.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>ABC | ${ABC.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>Chimie | ${Chimie.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>EEA | ${EEA.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TSER | ${TSER.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>PF | ${PF.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>SP | ${SP.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>2P2E | ${_2P2E.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}


function calculateResultsMPI() {
    const mathS1 = parseFloat(convertCommaToDot(document.getElementById('mathS1').value)) || 0;
    const mathS2 = parseFloat(convertCommaToDot(document.getElementById('mathS2').value)) || 0;
    const physiqueS1 = parseFloat(convertCommaToDot(document.getElementById('physiqueS1').value)) || 0;
    const physiqueS2 = parseFloat(convertCommaToDot(document.getElementById('physiqueS2').value)) || 0;
    const infoS1 = parseFloat(convertCommaToDot(document.getElementById('infoS1').value)) || 0;
    const infoS2 = parseFloat(convertCommaToDot(document.getElementById('infoS2').value)) || 0;
    const generalS1 = parseFloat(convertCommaToDot(document.getElementById('generalS1').value)) || 0;
    const generalS2 = parseFloat(convertCommaToDot(document.getElementById('generalS2').value)) || 0;

    const MIAGE = (2 * infoS1 + 2 * infoS2 + generalS1 + generalS2) / 6;
    const DA2I = (2 * infoS1 + 2 * infoS2 + generalS1 + generalS2) / 6;
    const MAI = (2 * mathS1 + 2 * mathS2 + generalS1 + generalS2) / 6;
    const EEA = (2 * physiqueS1 + 2 * physiqueS2 + mathS1 + mathS2 + generalS1 + generalS2) / 8;
    const TSER = (2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 6;
    const PF = (mathS1 + mathS2 + 2 * physiqueS1 + 2 * physiqueS2 + generalS1 + generalS2) / 8;

    const resultsHTML = `
        <div class="result-item"><p>MIAGE | ${MIAGE.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>DA2I | ${DA2I.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>MAI | ${MAI.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>EEA | ${EEA.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>TSER | ${TSER.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>PF | ${PF.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}

function restart() {
    // window.location.reload();
    currentType = '';
    document.getElementById('selection-box').classList.remove('hidden');
    document.getElementById('results').innerHTML = '';
    document.getElementById('results').classList.add('hidden');
    document.getElementById('FST').innerHTML = "FST-Orientation";
    document.getElementById('footer-text').classList.remove('hidden');
}



