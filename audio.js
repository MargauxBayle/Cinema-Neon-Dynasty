const playButton = document.getElementById("js-music--btn");
const audioElement = document.getElementById("js-loop");

let isPlaying = false;

/* audio on / off : */
function toggleAudio() {
  if (isPlaying) {
    audioElement.pause();
    playButton.textContent = "Play";
    isPlaying = false;
  } else {
    audioElement.play();
    playButton.textContent = "Pause";
    isPlaying = true;
  }
}

playButton.addEventListener("click", toggleAudio);
