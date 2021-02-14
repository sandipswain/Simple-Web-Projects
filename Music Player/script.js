window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colours = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6062d3",
    "#e4a838",
  ];
  //   Lets get going with the sound
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function () {
      sounds[i].currentTime = 0;
      sounds[i].play();
      createBubbles(i);
    });
  });
  //   Create a function that makes bubbles

  const createBubbles = (i) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colours[i];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
