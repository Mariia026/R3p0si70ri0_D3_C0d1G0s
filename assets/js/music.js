const boton = document.getElementById("playPause");
const audio = document.getElementById("musica");

boton.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

});


const musica = document.getElementById("musica");
const volumen = document.getElementById("volumen");

volumen.addEventListener("input", function() {
    musica.volume = this.value;
});
