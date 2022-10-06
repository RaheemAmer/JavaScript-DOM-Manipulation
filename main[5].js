const revealButton = document.querySelector(".reveal-btn-boxes");

const hideButton = document.querySelector(".hide-btn-boxes");

const hiddenBoxes = document.querySelector(".hidden-content-boxes");

function showText() {
    hiddenBoxes.style.display = "block";
}

function hideText() {
    hiddenBoxes.style.display = "none";
}
revealButton.addEventListener("click", showText);

hideButton.addEventListener("click", hideText);