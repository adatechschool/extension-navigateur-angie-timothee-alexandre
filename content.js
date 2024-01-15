//* VERSION DE BASE
const keywords = `
  violer, inceste, pénétr, sex, atouch, porn, pédoph, abus, harc, dominat, agression, guerre,
  mort, assassinat, violence, meurtre, bombe, attentat, arme, AK47, mitraill, flingue, pistolet,
  couteau, sabre, tank, glock, uzi, carabine, p50, fusil, m16, explosion, escadron,
  commando, armée, amput, éventr, assassin, égorg, décapit, démembr, mutil, écorch, écartel,
  brûl, noy, pend, étrangl, poignard, empoison, écras, ébouill
`

//* VERSION AVEC ALCOOL
const alcools = `
  bière, bières, biere, bieres,
  vin, vins,
  champagne, champagnes,
  whisky, whiskies, whiskey, whiskeys,
  vodka, vodkas,
  rhum, rhums,
  gin, gins,
  tequila, tequilas,
  pastis,
  martini, martinis,
  cognac, cognacs,
  calvados, calvadoss,
  saké, sakés,
  liqueur, liqueurs,
  ivre, ivres,
  ivresse, ivresses,
  saoul, saouls,
  saoule, saoules,
  saouler, saouler,
  saoulerie, saouleries,
  saoulard, saoulards,
  vin, vins,
  champagne, champagnes,
  vin rouge, vin rouges,
  vin blanc, vin blancs,
  vin rosé, vin rosés,
  vin pétillant, vin pétillants,
  lager,
  pilsner,
  ale,
  stout,
  porter,
  bock,
  weissbier,
  ipa
  kwak,
  trappiste,
  triple,
  quadruple,
  kriek,
  gueuze,
  lambic,
  desperados,
  delirium,
  duvel,
  heineken,
  kronenbourg,
  pelforth,
  1664,
  guinness,
  corona,
  budweiser,
  carlsberg,
  fosters,
  stella artois,
  leffe,
  grimbergen,
  hoegaarden,
  jupiler,
  picon,
  kir,
  prosecco,
  cava,
  crémant,
  asti,
  moscato,
  amaretto,
  bailey's,
  campari,
  chartreuse,
  cointreau,
  curaçao,
  grand marnier,
  malibu,
  manzana,
  passoa,
  pernod,
  pisang,
  ricard,
  get 27,
  get 31,
  bourbon,
  jack daniel's,
  jim beam,
  jameson,
  four roses,
  wild turkey,
  woodford reserve,
  maker's mark,
  canadian club,
  seagram's,
  gentleman jack,
  old grand dad,
  bulleit,
  knob creek,
  rye,
  scotch,
  single malt,
  blended,
  johnnie walker,
  chivas regal,
  ballantine's,
  dewar's,
  j&b,
  famous grouse,
  grant's,
  monkey shoulder,
  glenfiddich,
  glenlivet,
  glenmorangie,
  macallan,
  aberlour,
  ardbeg,
  bowmore,
  bruichladdich,
  caol ila,
  dalmore,
  dalwhinnie,
  glenkinchie,
  highland park,
  lagavulin,
  laphroaig,
  oban,
  talisker,
  balvenie,
  glenrothes,
  mortlach,
  tomatin,
  auchentoshan,
  glen grant,
  glen scotia,
  brandy,
  vermouth,
  porto,
  jaegermeister,
  bloody mary,
  caipirinha,
  cosmopolitan,
  daiquiri,
  irish coffee,
  long island iced tea,
  mai tai,
  margarita,
  mojito,
  negroni,
  old fashioned,
  pina colada,
  piña colada,
  planter's punch,
  punch,
  sex on the beach,
  singapore sling,
  tequila sunrise,
  tom collins,
  white russian,
  black russian,
  zombie,
  spritz,
  aperol spritz,
  americano,
  bellini,
  blue lagoon,
  moscow mule,
  petroleum malum,
  grog,
  flamingo,
  el presidente,
  coba libre,
  blue hawai,
  painkiller,
  sangria,
  mimosa,
  screwdriver,
  manhattan,
  mint julep,
  sidecar,
  eau de vie
`

// const wordsList = keywords.split(",").map(word => word.trim());
const wordsList = alcools.split(",").map(word => word.trim());

let regex = new RegExp(`(?:<[^>]*>)|(?:\\b${wordsList.join('\\b|\\b')}\\b)`, 'gi');
let imgRegex = new RegExp(`<img[^>]*alt="[^"]*(${wordsList.join('|')})[^"]*"[^>]*>`, 'gi');

const applyContentScript = () => {
  chrome.storage.sync.get('isEnabled', (data) => {
    if (data.isEnabled) {
      document.body.innerHTML = document.body.innerHTML.replace(regex, (match) => {
        //? Replace only if it's not inside an HTML tag
        return match.startsWith('<') ? match : "UNE PAUSE DANS VOTRE CONSOMMATION";
      });

      //? Replace img src (or blur images) if it contains a word from wordsList
      document.body.innerHTML = document.body.innerHTML.replace(imgRegex, (match) => {
          // return match.replace(/src="[^"]*"/, 'src="https://img.freepik.com/vecteurs-premium/aucune-icone-alcool-signe-interdiction-boisson-alcoolisee-verre-biere-dessin-anime-bouteille-vin-whisky-rouge-symbole-vecteur-boisson-interdiction-illustration-pas-boisson-alcoolisee-boisson-interdite-interdite_102902-4096.jpg?w=2000"');
        //! Fonctionne à moitié, seul quelques images sont remplacées
        return match.replace(/alt="[^"]*"/, "style='filter: blur(1rem);'");
        //! Fonctionne, toutes les images sont floutées (data:image)
      });
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