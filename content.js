document.addEventListener("DOMContentLoaded", function () {
    const keywords = {
        "violenceSexuelle": "viol, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression",
        "guerre": "guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet, couteau, hache, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron, commando, armée",
        "blessurePhysique": "amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel, brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill"
    }

    const parseTheme = () => {
        const inputList = document.querySelectorAll('.theme-container > input[type="checkbox"]');
        const listOfThemes = []

        for (const theme of inputList) {
            if (theme.checked) { listOfThemes.push(theme.id) }
        }
        return listOfThemes
    }

    const wordsList = keywords.violenceSexuelle.split(",").map(word => word.trim())
    let regex = new RegExp(wordsList.join('|'), 'gi');

    let pageContentContainer = document.querySelector('.page-content');

    const input = document.querySelector('input[type="checkbox"]');

    input.addEventListener("change", () => {
        console.log("BEAUTIFUL")
        if (input.checked) {
            console.log("Checkbox is checked..");
            const pageContent = document.body.innerText;
            const modifiedContent = pageContent.replace(regex, 'EXTENSION');
            pageContentContainer = modifiedContent.innerText;
        } else {
            console.log("Checkbox is not checked..");
        }
    });
});
