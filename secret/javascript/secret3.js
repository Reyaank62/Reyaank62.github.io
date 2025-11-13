const messages = [
    "Page not found, but we found you.",
    "It's not lost, you just shouldn't be here.",
    "You found this by accident, right?",
    "Do you remember your name?",
    "You're not supposed to be here.",
    "Access attempt logged. Don't try again.",
    "This page was not meant for you.",
];


if (Math.random() < 0.75) {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const messageEl = document.getElementById("message");
    messageEl.textContent = msg;
}