const $ = document;
let snowBallCounts = 400;
let minWidth = 2;
let maxScale = 2;
let newDropBall = null;
let randomValueRainBall = null;

for (var i = 1; i <= snowBallCounts; i++) {
  randomValueRainBall = createRandomValueRainBall();
  newDropBall = `
  <div class="rain-drop" style="scale: ${randomValueRainBall.scale}; 
  top: ${randomValueRainBall.top}vh; right: ${randomValueRainBall.right}vw; 
  animation-delay: ${randomValueRainBall.delay}s;
  width: ${minWidth}px;
  height: ${minWidth * 3}px;
  "></div>
  `;
  let newDoc = $.createElement("div");
  $.querySelector(".rainDrop-container").insertAdjacentHTML("beforeend", newDropBall);
}

// * make a random value for snowballs
function createRandomValueRainBall() {
  let scale = Math.floor(Math.random() * maxScale) + 1;
  let right = -5;
  let top = -5;
  let delay = (Math.random() * 5).toFixed(1);
  let teansformFlag = Math.random();
  if (teansformFlag > 0.2) {
    right = Math.ceil(Math.random() * 90);
  } else {
    top = Math.ceil(Math.random() * 80);
  }
  let result = { scale, right, top, delay };
  return result;
}
