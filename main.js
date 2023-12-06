// Get Buttons
const wDrum = document.querySelector(".w");
const aDrum = document.querySelector(".a");
const sDrum = document.querySelector(".s");
const dDrum = document.querySelector(".d");
const jDrum = document.querySelector(".j");
const kDrum = document.querySelector(".k");
const lDrum = document.querySelector(".l");

// Play audio 
function keyPlayAudio(e) {

  const crashAudio = new Audio(`./sounds/${e}.mp3`);

  crashAudio.play();

  document.querySelector(`.${e}`).classList.add("pressed");

  setTimeout(() => {
    document.querySelector(`.${e}`).classList.remove("pressed");
  }, 100);
}

// Play audio on click event
function playAudio(e) {
    const evt = e.target.innerHTML;
  
    keyPlayAudio(evt);
  }

// Add Click Event Listeners
wDrum.addEventListener("click", (e) => {
  playAudio(e);
});

aDrum.addEventListener("click", (e) => {
  playAudio(e);
});

sDrum.addEventListener("click", (e) => {
  playAudio(e);
});

dDrum.addEventListener("click", (e) => {
  playAudio(e);
});

lDrum.addEventListener("click", (e) => {
  playAudio(e);
});

jDrum.addEventListener("click", (e) => {
  playAudio(e);
});

kDrum.addEventListener("click", (e) => {
  playAudio(e);
});

//Add Keyboard Event Listeners
document.body.addEventListener("keydown", (event) => {

  const e = event.key;
  if (
    e === "w" ||
    e === "a" ||
    e === "s" ||
    e === "d" ||
    e === "j" ||
    e === "k" ||
    e === "l"
  ) {
    keyPlayAudio(e);
  }
});


