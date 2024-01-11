const keywords = {
  "violenceSexuelle": "viol, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression",
  "guerre": "guerre, mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet, couteau, hache, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron, commando, armée",
  "blessurePhysique": "amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel, brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill"
}
const wordsList = keywords.violenceSexuelle.split(",").map(word => word.trim())
let regex = new RegExp(wordsList.join('|'), 'gi');


const applyContentScript = () => {
  chrome.storage.sync.get('isEnabled', (data) => {
    if (data.isEnabled) {
      document.body.innerHTML = document.body.innerHTML.replace(regex, 'Flash info: Darmanin enfin en prison');
    } else {
      console.log('Encore raté');
    }
  });
}

applyContentScript();

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && 'isEnabled' in changes) {
    applyContentScript();
  }
});