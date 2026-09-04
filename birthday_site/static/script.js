// ================================
// ПОЯВЛЕНИЕ КАРТОЧЕК
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


cards.forEach(function(card) {

    observer.observe(card);

});



// ================================
// КОНФЕТТИ
// ================================

const button = document.querySelector(".button");


button.addEventListener("click", function() {

    for (let i = 0; i < 30; i++) {

        createConfetti();

    }

});



function createConfetti() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.innerHTML = "🎉";

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);


    setTimeout(function() {

        confetti.remove();

    }, 4000);

}



// ================================
// СООБЩЕНИЕ ПРИ НАЖАТИИ НА СЕРДЦЕ
// ================================

const heart = document.querySelector(".heart");


heart.addEventListener("click", function() {

    alert(
        "Ещё раз с днём рождения! 🎂✨"
    );

});
// ВЫБОР ВСТРЕЧИ

const meetingForm = document.getElementById("meeting-form");
const meetingResult = document.getElementById("meeting-result");

if (meetingForm) {

    meetingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        meetingResult.innerHTML = `
            <h3>Отлично! ❤️</h3>
            <p>Я увидел твой выбор:</p>
            <p>📅 Дата: ${date}</p>
            <p>🕒 Время: ${time}</p>
        `;

    });

}