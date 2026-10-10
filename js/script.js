
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    document.querySelector(".welcome-card").innerHTML = `
        <div class="chelsea-badge">💙 CFC 💙</div>

        <h1>HEY, RANDY! ⚽</h1>

        <div class="photo-frame">
            <img src="Randy.jpg" alt="Randy">
        </div>

        <h2>READY, CHAMPION?</h2>

        <p class="message">
            Your big brother has a special message for you!
        </p>

        <div class="exam-message">
            🏆 Believe in yourself.<br><br>
            🧠 Read every question carefully.<br><br>
            💪 Take your time and do your best.<br><br>
            💙 Remember, you've got this!
        </div>

        <button id="messageButton">
            OPEN MY SURPRISE ❤️
        </button>

        <p class="footer">Come on, little champion! 💙</p>
    `;

    document.getElementById("messageButton")
        .addEventListener("click", showBrotherMessage);
});

function showBrotherMessage() {
    document.querySelector(".welcome-card").innerHTML = `
        <div class="chelsea-badge">💙 YOUR BIG BRO 💙</div>

        <h1>RANDY, THIS IS FOR YOU! 🏆</h1>

        <p class="message" style="font-size: 17px;">
            Hey Randy! ❤️
            <br><br>
            You are our little champion, and I'm so proud of you.
            <br><br>
            Your exams are one more step on your journey.
            Be brave, stay focused, and always try your best.
            <br><br>
            If a question is difficult, don't panic.
            Take a deep breath and try again!
            <br><br>
            No matter what happens, remember that your big
            brother believes in you and will always be cheering
            you on.
            <br><br>
            Keep smiling, keep learning, and keep dreaming BIG!
            <br><br>
            I love you, little bro. 💙
        </p>

        <h2 style="color: #ffd966;">YOU'VE GOT THIS, RANDY! ⚽</h2>

        <p class="footer">Forever cheering for you — Big Bro 💙</p>

        <button id="celebrateButton">
            LET'S CELEBRATE! 🎉
        </button>
        
<button id="teamButton">
    WELCOME TO THE TEAM OF CHAMPIONS...LONDON BLUES! 💙
</button>

    `;

    document.getElementById("celebrateButton")
        .addEventListener("click", celebrate);
        
document.getElementById("teamButton")
    .addEventListener("click", showPlayerCard);

}


function celebrate() {
    const card = document.querySelector(".welcome-card");

    card.innerHTML = `
        <div class="chelsea-badge">💙 CHELSEA FC 💙</div>

        <h1 class="celebration-title">
            GO RANDY GO! 🏆
        </h1>

        <div class="photo-frame celebration-photo">
            <img src="Randy.jpg"
                 alt="Our little champion Randy">
        </div>

        <h2 class="trophy-message">
            OUR LITTLE CHAMPION!
        </h2>

        <p class="message">
            Today you dream. Tomorrow you achieve!
            <br><br>
            Believe in yourself, work hard, and never give up.
            <br><br>
            Whatever happens in your exams, your big brother
            will always be proud of you. 💙
        </p>

        <div class="celebration-icons">
            ⚽ 💙 🏆 💛 🎉
        </div>

        <p class="footer">
            Made with love, just for Randy.
            <br>
            Forever cheering for you — Big Bro 💙
        </p>

        <p class="final-wish">
            YOU'RE A STAR, RANDY! ⭐
        </p>
    `;

    // Create falling celebration symbols
    const symbols = ["⭐", "💙", "⚽", "🎉", "🏆", "💛"];

    for (let i = 0; i < 35; i++) {
        const star = document.createElement("span");

        star.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        star.className = "celebration-particle";

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration =
            (2.5 + Math.random() * 3) + "s";

        star.style.animationDelay =
            (Math.random() * 1.5) + "s";

        document.body.appendChild(star);

        star.addEventListener("animationend", function () {
            star.remove();
        });
    }
}


function showPlayerCard() {
    document.querySelector(".welcome-card").innerHTML = `
        <div class="chelsea-badge">💙 CHELSEA FC 💙</div>

        <h1>RANDY'S DREAM TEAM! 🏆</h1>

        <p class="message">
            Three stars. One team. BIG DREAMS!
        </p>

        <div class="team-players">
            <div class="player">
                <img src="palmer.jpg" alt="Cole Palmer">
                <p>COLE PALMER</p>
            </div>

            <div class="player randy-player">
                <img src="Randy.jpg" alt="Randy">
                <p>RANDY 👑</p>
            </div>

            <div class="player">
                <img src="joao-pedro.jpg" alt="Joao Pedro">
                <p>JOÃO PEDRO</p>
            </div>
        </div>

        <h2 style="color: #ffd966;">
            BRANDON PETER JUNIOR
        </h2>

        <p class="message">
            The next champion is YOU, Randy! ⚽
        </p>

        <button id="backCelebrateButton">
            LET THE WARRIOR SHINE THE PRIDE OF DONATA! 🎉
        </button>

        <p class="footer">Made with love by Big Bro 💙</p>
    `;

    document.getElementById("backCelebrateButton")
        .addEventListener("click", celebrate);
}

