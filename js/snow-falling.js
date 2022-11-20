const $ = document;
let snowBallCounts = 300;
let minWidth = 4;
let maxScale = 2;
let newSnowBall = null;
let randomValueSnowBall = null;

for (var i = 1; i <= snowBallCounts; i++) {
  randomValueSnowBall = createRandomValueSnowBall();
  newSnowBall = `
  <div class="snow__ball" style="scale: ${randomValueSnowBall.scale}; 
  top: ${randomValueSnowBall.top}vh; right: ${randomValueSnowBall.right}vw; 
  animation-delay: ${randomValueSnowBall.delay}s;
  width: ${minWidth}px;
  height: ${minWidth}px;
  "></div>
  `;
  let newDoc = $.createElement("div");
  $.querySelector(".snow-container").insertAdjacentHTML("beforeend", newSnowBall);
}

// * make a random value for snowballs
function createRandomValueSnowBall() {
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
