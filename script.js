const element = document.getElementsByClassName('element')[0];
const toggleButton = document.getElementById("togglebt");

let isPlaying = true;
toggleButton.addEventListener('click', () => {
    if (isPlaying) {
        element.style.animationPlayState = "paused";
        toggleButton.textContent = "PLAY";
    } else {
        element.style.animationPlayState = "running";
        toggleButton.textContent = "PAUSE";
    }
    isPlaying = !isPlaying;
});
