const secondes = document.querySelector('.secondes .number')
const minutes = document.querySelector('.minutes .number')
const heures = document.querySelector('.heures .number')
const jours = document.querySelector('.jours .number')

document.addEventListener("DOMContentLoaded", function () {
    randomQuote();
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function () {
        // Récupérer la date actuelle
        const startDate = new Date();

        // Stocker la date de début dans le stockage local
        localStorage.setItem("challengeStartDate", startDate.toISOString());

        // Démarrer le compteur
        startCounter(startDate);
    });

    function startCounter(startDate) {
        setInterval(function () {
            // Récupérer la date de début depuis le stockage local
            const storedStartDate = localStorage.getItem("challengeStartDate");

            if (storedStartDate) {
                const startDate = new Date(storedStartDate);
                const currentDate = new Date();
                const elapsedMilliseconds = currentDate - startDate;

                const secondsNow = Math.floor((elapsedMilliseconds / 1000) % 60);
                const minutesNow = Math.floor((elapsedMilliseconds / 1000 / 60) % 60);
                const hoursNow = Math.floor((elapsedMilliseconds / 1000 / 60 / 60) % 24);
                const daysNow = Math.floor(elapsedMilliseconds / 1000 / 60 / 60 / 24);

                // Afficher le compteur
                // counterDisplay.textContent = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
                secondes.innerHTML = secondsNow < 10 ? `0${secondsNow}` : secondsNow
                minutes.innerHTML = minutesNow < 10 ? `0${minutesNow}` : minutesNow
                heures.innerHTML = hoursNow < 10 ? `0${hoursNow}` : hoursNow
                jours.innerHTML = daysNow < 10 ? `0${daysNow}` : daysNow
            }
        }, 1000);
    }

    // Vérifier si le défi est déjà en cours au chargement de la page
    const storedStartDate = localStorage.getItem("challengeStartDate");
    if (storedStartDate) {
        const startDate = new Date(storedStartDate);
        startCounter(startDate);
    }
});

let motivations = document.getElementById("motivations");

async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
    
    // Output the quote and author name
    console.log(quote.content)
    console.log(`- ${quote.author}`)

    motivations.innerHTML = "<h2> "+ quote.content + "</h2><br><h3>- " + quote.author + "</h3>";
}

const performGoogleSearch = () => {
    const searchTerm = document.getElementById('searchInput').value;
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
    window.location.href = searchUrl;
}

document.getElementById('searchBtn').addEventListener('click', performGoogleSearch);

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        performGoogleSearch(); 
    }
});

function randomNb(nb) {
    return Math.floor(Math.random() * nb) + 1;
}

let audio2 = new Audio(`https://www.soundjay.com/nature/sounds/river-${randomNb(6)}.mp3`);
audio2.play();


//? TRADUCTION

// Define a dictionary of translations for each language
const translations = {
    'en-gb': {
        "TITLE": "Get Sober !",
        "DESCRIPTION": "Starting the New Year with new goals, it's the occasion to ask yourself about your drinking habits. Did you ever get black out ? Do you drink on your own ? Do you need to drink to go out ?",
        "START": "START THE CHALLENGE",
    },
    'fr-fr': {
        "TITLE": "Soyez Sobre !",
        "DESCRIPTION": "A l'occasion du dry january, prends le temps de te poser les bonnes questions sur ta consommation d'alcool",
        "START": "COMMENCER LE CHALLENGE",
    }
};

  // Get the language buttons and the elements with the lang class
const langButtons = document.querySelectorAll('.translate');
const langElements = document.querySelectorAll('.lang');

  // Add click event listeners to the language buttons
langButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the selected language from the button id
        const lang = button.id;

      // Update the text content of the elements with the lang class
        langElements.forEach(element => {
        const key = element.getAttribute('key');
        element.textContent = translations[lang][key];
        });
    });
});