// document.addEventListener("DOMContentLoaded", function () {
//     const keywords = {
//         "violenceSexuelle": "viol, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression",
//         "guerre": "guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet, couteau, hache, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron, commando, armée",
//         "blessurePhysique": "amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel, brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill"
//     }

//     const parseTheme = () => {
//         const inputList = document.querySelectorAll('.theme-container > input[type="checkbox"]');
//         const listOfThemes = []

//         for (const theme of inputList) {
//             if (theme.checked) { listOfThemes.push(theme.id) }
//         }
//         return listOfThemes
//     }

//     const wordsList = keywords.violenceSexuelle.split(",").map(word => word.trim())
//     let regex = new RegExp(wordsList.join('|'), 'gi');

//     let pageContentContainer = document.querySelector('.page-content');

//     const input = document.querySelector('input[type=checkbox]');

//     input.addEventListener("change", () => {
//         console.log("BEAUTIFUL")
//         if (input.checked) {
//             console.log("Checkbox is checked..");
//             const pageContent = document.body.innerText;
//             const modifiedContent = pageContent.replace(regex, 'EXTENSION');
//             pageContentContainer = modifiedContent.innerText;
//         } else {
//             console.log("Checkbox is not checked..");
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'état de la case à cocher depuis le stockage local
    let checkboxState1 = localStorage.getItem('checkboxState1');
    let checkboxState2 = localStorage.getItem('checkboxState2');
    let checkboxState3 = localStorage.getItem('checkboxState3');

    // Si l'état existe, mettre à jour la case à cocher
    if (checkboxState1 === 'checked') {
        document.getElementById('sex').checked = true;
    }
    if (checkboxState2 === 'checked') {
        document.getElementById('guerre').checked = true;
    }
    if (checkboxState3 === 'checked') {
        document.getElementById('blessure').checked = true;
    }

    // Ajouter un gestionnaire d'événement pour la case à cocher
    document.getElementById('sex').addEventListener('change', function() {
        // Mettre à jour l'état dans le stockage local lorsqu'il y a un changement
        localStorage.setItem('checkboxState1', this.checked ? 'checked' : 'unchecked');
    });
    document.getElementById('guerre').addEventListener('change', function() {
        localStorage.setItem('checkboxState2', this.checked ? 'checked' : 'unchecked');
    });
    document.getElementById('blessure').addEventListener('change', function() {
        localStorage.setItem('checkboxState3', this.checked ? 'checked' : 'unchecked');
    });
});
