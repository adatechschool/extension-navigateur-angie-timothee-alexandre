// const secondes = document.querySelector('.secondes .number')
// const minutes = document.querySelector('.minutes .number')
// const heures = document.querySelector('.heures .number')
// const jours = document.querySelector('.jours .number')


// console.log(secondes.value, minutes, heures, jours)


// let secValue = 0
// let minValue = 0
// let hourValue = 0
// let dayValue = 0

// const startTimer = () => {

//     const timeFunction = setInterval(() => {

//         secValue++;

//         if (secValue === 60) {
//             minValue++;
//             secValue = 0;
//         }
//         if (minValue === 60) {
//             hourValue++;
//             minValue = 0;
//         }
//         if (hourValue === 24) {
//             dayValue++;
//             hourValue = 0;
//         }

//         secondes.innerHTML = secValue < 10 ? `0${secValue}` : secValue
//         minutes.innerHTML = minValue < 10 ? `0${minValue}` : minValue
//         heures.innerHTML = hourValue < 10 ? `0${hourValue}` : hourValue
//         jours.innerHTML = dayValue < 10 ? `0${dayValue}` : dayValue

//     }, 1000);
// }

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const counterDisplay = document.getElementById("counter");

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

                const seconds = Math.floor((elapsedMilliseconds / 1000) % 60);
                const minutes = Math.floor((elapsedMilliseconds / 1000 / 60) % 60);
                const hours = Math.floor((elapsedMilliseconds / 1000 / 60 / 60) % 24);
                const days = Math.floor(elapsedMilliseconds / 1000 / 60 / 60 / 24);

                // Afficher le compteur
                counterDisplay.textContent = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
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


