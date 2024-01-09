//import { listOfThemes } from "./popup/popup"

const keywords = {
    "ViolenceSexuelle": "viol, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression",
    "guerre": "guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet, couteau, hache, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron, commando, armée",
    "blessurePhysique": "amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel, brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill"
}

const parseTheme = ()=>{
    const inputList = document.querySelectorAll('input')
    const listOfThemes = []

    for (const theme of inputList){
        if (theme.checked) {listOfThemes.push(theme.id)}
    }
    return listOfThemes
}

async function hideTriggerWords (listOfThemes) // param = ['ViolenceSexuelle', 'guerre']
{   
    console.log('coucou')
    for (let theme of listOfThemes) {
        const themeWords = keywords[theme]
        const wordsList = themeWords.split(",").map(word => word.trim())
        let regex = new RegExp(wordsList.join('|'), 'gi');
        document.body.innerHTML = document.body.innerHTML.replace(regex, 'EXTENSION');
    }
}


hideTriggerWords(parseTheme())