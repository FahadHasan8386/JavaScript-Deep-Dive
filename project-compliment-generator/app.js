// One array + Math.random() + one button. That's the whole app.
// ===============================================================

const COMPLIMENTS = [
    "You light up every room you walk into. ✨",
    "Your code is going to change the world someday. 💻",
    "You explain things so clearly — teacher material! 🎓",
    "You're the friend everyone wishes they had. 🤝",
    "That idea you had earlier? Genuinely brilliant. 💡",
    "You make hard things look easy. 🚀",
    "Your smile is contagious, don't stop. 😄",
    "You're better at this than you give yourself credit for. 🌟",
    "The world is a little better with you in it. 🌍",
    "You showed up today. That counts for a lot. 💚"
];

const giveBtn = document.querySelector("#giveBtn");
const result = document.querySelector("#result");

giveBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * COMPLIMENTS.length);
    result.textContent = COMPLIMENTS[randomIndex];
});