const envelope = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

// Función para calcular el tiempo juntos
function updateCounter() {
  const startDate = new Date('2024-04-05T00:00:00');
  const now = new Date();
  
  const diff = now - startDate;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  const counterHTML = `
    <div class="counter-item">
      <span class="counter-number">${days}</span>
      <span class="counter-label">${days === 1 ? 'Día' : 'Días'}</span>
    </div>
    <div class="counter-item">
      <span class="counter-number">${hours}</span>
      <span class="counter-label">${hours === 1 ? 'Hora' : 'Horas'}</span>
    </div>
    <div class="counter-item">
      <span class="counter-number">${minutes}</span>
      <span class="counter-label">${minutes === 1 ? 'Min' : 'Mins'}</span>
    </div>
    <div class="counter-item">
      <span class="counter-number">${seconds}</span>
      <span class="counter-label">${seconds === 1 ? 'Seg' : 'Segs'}</span>
    </div>
  `;
  
  document.getElementById('timeCounter').innerHTML = counterHTML;
}

// Actualizar el contador inmediatamente y cada segundo
updateCounter();
setInterval(updateCounter, 1000);

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".envelope") ||
    e.target.matches(".tap-right") ||
    e.target.matches(".tap-left") ||
    e.target.matches(".heart")
  ) {
    envelope.classList.toggle("flap");
  } else if (e.target.matches(".envelope *")) {
    if (!letter.classList.contains("opened")) {
      letter.classList.add("letter-opening");

      setTimeout(() => {
        letter.classList.remove("letter-opening");
        letter.classList.add("opened");
      }, 500);
      envelope.classList.add("disable-envelope");
    } else {
      letter.classList.add("closing-letter");
      envelope.classList.remove("disable-envelope");
      letter.classList.remove("opened");
      setTimeout(() => {
        letter.classList.remove("closing-letter");
        letter.classList.remove("opened");
      }, 500);
    }
  }
});