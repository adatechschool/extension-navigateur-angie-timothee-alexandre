//import { listOfThemes } from "./popup/popup"

const keywords = {
    "ViolenceSexuelle": "viol, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression",
    "guerre": "guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet, couteau, hache, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron, commando, armée",
    "blessurePhysique": "amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel, brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill"
}

const parseTheme = () => {
    const inputList = document.querySelectorAll('.theme-container input[type="checkbox"]');
    const listOfThemes = []

    for (const theme of inputList) {
        if (theme.checked) { listOfThemes.push(theme.id) }
    }
    return listOfThemes
}

// async function hideTriggerWords(listOfThemes) // param = ['ViolenceSexuelle', 'guerre']
// {
//     console.log('coucou')
//     for (let theme of listOfThemes) {
//         const themeWords = keywords[theme]
//         const wordsList = themeWords.split(",").map(word => word.trim())
//         let regex = new RegExp(wordsList.join('|'), 'gi');
//         document.body.innerHTML = document.body.innerHTML.replace(regex, 'EXTENSION');
//     }
// }

const wordsList = keywords.ViolenceSexuelle.split(",").map(word => word.trim())
let regex = new RegExp(wordsList.join('|'), 'gi');

const input = document.querySelector('.theme-container > input[type="checkbox"]');

input.addEventListener("change", () => {
    console.log("BEAUTIFUL")
    if (input.checked) {

        var newDiv = document.createElement("div");

        // Mettez à jour le contenu du nouvel élément avec le texte modifié
        newDiv.innerHTML = document.body.innerHTML.replace(regex, 'EXTENSION');

        // Remplacez le contenu de body par le nouvel élément div
        document.body.innerHTML = newDiv.innerHTML;
    };
})
