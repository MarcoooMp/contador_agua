let count = 0;
const maxCups = 5;
const waterEl = document.getElementById('water');
const countEl = document.getElementById('count');
const awesomeEl = document.getElementById('awesome');

function updateDisplay() {
  countEl.textContent = count;
  waterEl.style.height = `${(count / maxCups) * 100}%`;
  countEl.nextSibling.textContent = ` copos (${count * 500} ml)`;
}

function showAwesome() {
  // Remove e adiciona a classe para reiniciar a animação
  awesomeEl.classList.remove('show');
  void awesomeEl.offsetWidth; // força reflow para reiniciar animação
  awesomeEl.classList.add('show');

  // Depois de 3 segundos, remove a classe
  setTimeout(() => {
    awesomeEl.classList.remove('show');
  }, 3000);
}

function addGlass() {
  if (count < maxCups) {
    count++;
    updateDisplay();
    if (count === maxCups) {
      showAwesome();
    }
  } else {
    alert("Limite de 5 copos por dia atingido! 💧");
  }
}

function reset() {
  count = 0;
  updateDisplay();
  awesomeEl.classList.remove('show');
}

updateDisplay();
