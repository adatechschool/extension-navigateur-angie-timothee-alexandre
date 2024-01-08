let keywords = []
let keyword = "agression, viol, inceste, baise, pénétration, atouchement, chatte, bite, cul, porno, pédophile, abus, guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, amputation, éventrer, poignarder".split(",").forEach((word, i) => keywords[i] = word.trim())

console.log(keywords)

for (let word of keywords) {
    let regex = new RegExp(word, 'gi');
    document.body.innerHTML = document.body.innerHTML.replace(regex, 'EXTENSION');
}
