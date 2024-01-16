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

let audio = new Audio("https://www.soundjay.com/nature/sounds/stream-1.mp3");
audio.play();
