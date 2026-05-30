const boton = document.getElementById("playPause");
const audio = document.getElementById("musica");

boton.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

});
