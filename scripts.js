// I Hope i odn't need to re-read this again :(

let currentType = '';
let currentYear = '';

function showInputs(type) {
    currentType = type;
    if (currentYear === 'L1') {
        document.getElementById('selection-box').classList.add('hidden');
    }else if (currentYear === 'L2') {
        document.getElementById('selection-box2').classList.add('hidden');
    }
    document.getElementById('footer-text').classList.add('hidden');
    document.getElementById('inputs').innerHTML = generateInputs(type);
    document.getElementById('inputs').classList.remove('hidden');
    document.getElementById('FST').innerHTML = `Les Orientations du ${type}`;
}

function showYear(Year) {
    currentYear = Year;
    if (currentYear === 'L1') {
        document.getElementById('selection-box').classList.remove('hidden');
        document.getElementById('licence').classList.add('hidden');
    } else if (currentYear === 'L2') {
        document.getElementById('selection-box2').classList.remove('hidden');
        document.getElementById('licence').classList.add('hidden');
    }
}

function generateInputs(type) {
    let inputs = [];
    const message = '<p align="center">Veuillez saisir les moyennes des modules suivants (première session uniquement).</p>';
    const cbutton = '<button id="calculate-button" onclick="calculate()">Calculer</button>';

    switch (type) {
        case 'BG':
            inputs = [
                { id: 'biologieS1', placeholder: 'Module Biologie [S1]' },
                { id: 'biologieS2', placeholder: 'Module Biologie [S2]' },
                { id: 'geologieS1', placeholder: 'Module Géologie [S1]' },
                { id: 'geologieS2', placeholder: 'Module Géologie [S2]' },
                { id: 'chimieS1', placeholder: 'Module Chimie [S1]' },
                { id: 'chimieS2', placeholder: 'Module Chimie [S2]' },
                { id: 'mathS1', placeholder: 'Module Math - Physique [S1]' },
                { id: 'mathS2', placeholder: 'Module Math - Physique [S2]' },
                { id: 'generalS1', placeholder: 'Moyenne Générale [S1]' },
                { id: 'generalS2', placeholder: 'Moyenne Générale [S2]' }
            ];
            break;
        case 'PC':
            inputs = [
                { id: 'chimieS1', placeholder: 'Module Chimie [S1]' },
                { id: 'chimieS2', placeholder: 'Module Chimie [S2]' },
                { id: 'physiqueS1', placeholder: 'Module Physique [S1]' },
                { id: 'physiqueS2', placeholder: 'Module Physique [S2]' },
                { id: 'mathS1', placeholder: 'Module Math [S1]' },
                { id: 'mathS2', placeholder: 'Module Math [S2]' },
                { id: 'generalS1', placeholder: 'Moyenne Générale [S1]' },
                { id: 'generalS2', placeholder: 'Moyenne Générale [S2]' }
            ];
            break;
        case 'MPI':
            inputs = [
                { id: 'mathS1', placeholder: 'Module Math [S1]' },
                { id: 'mathS2', placeholder: 'Module Math [S2]' },
                { id: 'physiqueS1', placeholder: 'Module Physique [S1]' },
                { id: 'physiqueS2', placeholder: 'Module Physique [S2]' },
                { id: 'infoS1', placeholder: 'Module Informatique [S1]' },
                { id: 'infoS2', placeholder: 'Module Informatique [S2]' },
                { id: 'generalS1', placeholder: 'Moyenne Générale [S1]' },
                { id: 'generalS2', placeholder: 'Moyenne Générale [S2]' }
            ];
            break;
        case 'BIO':
            inputs = [
                { id: 'diversite_animale_vegetale_S3', placeholder: 'Diversité Animale et Végétale [S3]' },
                { id: 'parasitologie_bacteriologie_S3', placeholder: 'Parasitologie et Bactériologie [S3]' },
                { id: 'genetique_ecologie_S3', placeholder: 'Génétique et Écologie [S3]' },
                { id: 'biochimie_biologie_moleculaire_S3', placeholder: 'Biochimie et Biologie Moléculaire [S3]' },
                { id: 'physiologie_histologie_S4', placeholder: 'Physiologie et Histologie [S4]' },
                { id: 'physiologie_biochimie_S4', placeholder: 'Physiologie et Biochimie [S4]' },
                { id: 'genetique_ecologie_S4', placeholder: 'Génétique et Écologie [S4]' },
                { id: 'moyenne_generale_S3', placeholder: 'Moyenne Générale [S3]' },
                { id: 'moyenne_generale_S4', placeholder: 'Moyenne Générale [S4]' }
            ];
            break;
        case 'GÉO':
            inputs = [
                { id: 'petroS3', placeholder: 'Etude des minéraux et Pétrographie [S3]' },
                { id: 'paleoS3', placeholder: 'Paléontologie et Stratigraphie [S3]' },
                { id: 'tectoS4', placeholder: 'Tectonique et Cartographie géologique [S4]' },
                { id: 'petroS4', placeholder: 'Pétrographie et Géochimie minérale [S4]' },
                { id: 'topoS4', placeholder: 'Géophysique appliquée et Topographie [S4]' },
                { id: 'sigS4', placeholder: 'Géologie de l’environnement et SIG [S4]' },
                { id: 'generalS3', placeholder: 'Moyenne Générale [S3]' },
                { id: 'generalS4', placeholder: 'Moyenne Générale [S4]' }
            ];
            break;
        case 'MAI':
            inputs = [
                { id: 'fpvS3', placeholder: 'Analyse vectorielle et FPV [S3]' },
                { id: 'analyseS3', placeholder: 'Analyse et Topologie [S3]' },
                { id: 'langageS3', placeholder: 'Initiation, Langage C et Systèmes [S3]' },
                { id: 'fpvS4', placeholder: 'FPV, Probabilités et Intégration [S4]' },
                { id: 'unixS4', placeholder: 'Architecture, UNIX et Anglais [S4]' },
                { id: 'generalS3', placeholder: 'Moyenne Générale [S3]' },
                { id: 'generalS4', placeholder: 'Moyenne Générale [S4]' }
            ];
            break;
        default:
            break;
    }

    return message + createInputHTML(inputs) + cbutton;
}

function createInputHTML(inputs) {
    return inputs.map(input => `<input type="text" id="${input.id}" placeholder="${input.placeholder}">`).join('');
}

function convertCommaToDot(strNum) {
    if (strNum.includes(",")) {
      return strNum.replace(",", ".");
    } else {
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
        case 'BIO':
            resultsHTML = calculateResultsBIO(); 
            break;
        case 'GÉO':
            resultsHTML = calculateResultsGÉO(); 
            break;
        case 'MAI':
            resultsHTML = calculateResultsMAI();
            break;
        default:
            break;
    }
    document.getElementById('inputs').innerHTML = '';
    document.getElementById('inputs').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('results').innerHTML = resultsHTML;
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

function calculateResultsBIO() {
    const diversiteS3 = parseFloat(convertCommaToDot(document.getElementById('diversite_animale_vegetale_S3').value)) || 0;
    const parasitologieS3 = parseFloat(convertCommaToDot(document.getElementById('parasitologie_bacteriologie_S3').value)) || 0;
    const genetiqueS3 = parseFloat(convertCommaToDot(document.getElementById('genetique_ecologie_S3').value)) || 0;
    const biochimieS3 = parseFloat(convertCommaToDot(document.getElementById('biochimie_biologie_moleculaire_S3').value)) || 0;
    const physiologieHistologieS4 = parseFloat(convertCommaToDot(document.getElementById('physiologie_histologie_S4').value)) || 0;
    const physiologieBiochimieS4 = parseFloat(convertCommaToDot(document.getElementById('physiologie_biochimie_S4').value)) || 0;
    const genetiqueS4 = parseFloat(convertCommaToDot(document.getElementById('genetique_ecologie_S4').value)) || 0;
    const moyenneGeneraleS3 = parseFloat(convertCommaToDot(document.getElementById('moyenne_generale_S3').value)) || 0;
    const moyenneGeneraleS4 = parseFloat(convertCommaToDot(document.getElementById('moyenne_generale_S4').value)) || 0;

    const BMP = (parasitologieS3 + genetiqueS3 + biochimieS3 + physiologieHistologieS4 + physiologieBiochimieS4 + genetiqueS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /8;
    const BOE = (diversiteS3 + genetiqueS3 + physiologieHistologieS4 + genetiqueS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /6;

    const resultsHTML = `
        <div class="result-item"><p>BMP | ${BMP.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>BOE | ${BOE.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}

function calculateResultsGÉO() {
    const petroS3 = parseFloat(convertCommaToDot(document.getElementById('petroS3').value)) || 0;
    const paleoS3 = parseFloat(convertCommaToDot(document.getElementById('paleoS3').value)) || 0;
    const tectoS4 = parseFloat(convertCommaToDot(document.getElementById('tectoS4').value)) || 0;
    const petroS4 = parseFloat(convertCommaToDot(document.getElementById('petroS4').value)) || 0;
    const topoS4 = parseFloat(convertCommaToDot(document.getElementById('topoS4').value)) || 0;
    const sigS4 = parseFloat(convertCommaToDot(document.getElementById('sigS4').value)) || 0;
    const moyenneGeneraleS3 = parseFloat(convertCommaToDot(document.getElementById('generalS3').value)) || 0;
    const moyenneGeneraleS4 = parseFloat(convertCommaToDot(document.getElementById('generalS4').value)) || 0;

    const MINE = (petroS3 + petroS4 + topoS4 + sigS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /6;
    const GEOS = (petroS3 + paleoS3 + tectoS4 + sigS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /6;

    const resultsHTML = `
        <div class="result-item"><p>MINE | ${MINE.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>GEOS | ${GEOS.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}

function calculateResultsMAI() {
    const fpvS3 = parseFloat(convertCommaToDot(document.getElementById('fpvS3').value)) || 0;
    const analyseS3 = parseFloat(convertCommaToDot(document.getElementById('analyseS3').value)) || 0;
    const LangageS3 = parseFloat(convertCommaToDot(document.getElementById('langageS3').value)) || 0;
    const fpvS4 = parseFloat(convertCommaToDot(document.getElementById('fpvS4').value)) || 0;
    const unixS4 = parseFloat(convertCommaToDot(document.getElementById('unixS4').value)) || 0;
    const moyenneGeneraleS3 = parseFloat(convertCommaToDot(document.getElementById('generalS3').value)) || 0;
    const moyenneGeneraleS4 = parseFloat(convertCommaToDot(document.getElementById('generalS4').value)) || 0;

    const MI = (LangageS3 + unixS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /4;
    const MA = (fpvS3 + analyseS3 + fpvS4 + moyenneGeneraleS3 + moyenneGeneraleS4) /5;

    const resultsHTML = `
        <div class="result-item"><p>MI | ${MI.toFixed(4)} / 20</p></div>
        <div class="result-item"><p>MA | ${MA.toFixed(4)} / 20</p></div>
        <p></p>
        <button onclick="restart()">Recommencer</button>
    `;

    return resultsHTML;
}

function restart() {
    let choice = prompt("Voulez-vous revenir à la section des saisies (1) ou recommencer depuis le début (2)?");
    if (choice === '1') {
        // User chose to go back to the input section
        document.getElementById('results').innerHTML = '';
        document.getElementById('results').classList.add('hidden');
        document.getElementById('inputs').innerHTML = generateInputs(currentType);
        document.getElementById('inputs').classList.remove('hidden');
    } else if (choice === '2') {
        // User chose to restart from the beginning
        currentType = '';
        currentYear = '';
        document.getElementById('licence').classList.remove('hidden');
        document.getElementById('results').innerHTML = '';
        document.getElementById('results').classList.add('hidden');
        document.getElementById('FST').innerHTML = "FST-Orientation";
        document.getElementById('footer-text').classList.remove('hidden');
    }
    else {
        // Do nothing if the choice is neither '1' nor '2'
    }
}