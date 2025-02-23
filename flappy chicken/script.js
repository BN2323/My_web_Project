const bird = document.getElementById('bird');
const pipeTop = document.getElementById('pipe-top');
const pipeBottom = document.getElementById('pipe-bottom');
const scoreDisplay = document.getElementById('score');
let birdY = 200;
let birdVelocity = 0;
let gravity = 0.6;
let isGameOver = false;
let score = 0;

function startGame() {
  movePipes();
  setInterval(updateGame, 20);
  document.addEventListener('keydown', () => birdVelocity = -8);
}

function updateGame() {
  if (isGameOver) return;

  // Bird physics
  birdY += birdVelocity;
  birdVelocity += gravity;
  bird.style.top = `${birdY}px`;

  // Check collision with ground or pipes
  if (birdY < 0 || birdY > 550 || checkCollision()) {
    gameOver();
  }

  // Scoring
  if (parseInt(pipeTop.style.left) === 50) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }
}

function movePipes() {
  let pipeGap = 150;
  let randomHeight = Math.floor(Math.random() * 200) + 50;
  pipeTop.style.height = `${randomHeight}px`;
  pipeBottom.style.height = `${600 - randomHeight - pipeGap}px`;

  let pipeX = 400;
  const pipeInterval = setInterval(() => {
    if (isGameOver) return clearInterval(pipeInterval);

    pipeX -= 5;
    if (pipeX < -60) {
      pipeX = 400;
      randomHeight = Math.floor(Math.random() * 200) + 50;
      pipeTop.style.height = `${randomHeight}px`;
      pipeBottom.style.height = `${600 - randomHeight - pipeGap}px`;
    }

    pipeTop.style.left = `${pipeX}px`;
    pipeBottom.style.left = `${pipeX}px`;
  }, 30);
}

function checkCollision() {
  const birdRect = bird.getBoundingClientRect();
  const pipeTopRect = pipeTop.getBoundingClientRect();
  const pipeBottomRect = pipeBottom.getBoundingClientRect();

  return (
    birdRect.right > pipeTopRect.left &&
    birdRect.left < pipeTopRect.right &&
    (birdRect.top < pipeTopRect.bottom || birdRect.bottom > pipeBottomRect.top)
  );
}

function gameOver() {
  isGameOver = true;
  alert(`Game Over! Your final score: ${score}`);
  window.location.reload();
}

startGame();
