
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

  refs.stopBtn.setAttribute('disabled', true);
  let change = null;
  refs.startBtn.addEventListener('click', () => {
    change = setInterval(() => {
      setRandomHexColor();
    }, 1000);
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
  });
  
  function setRandomHexColor() {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }
  
  refs.stopBtn.addEventListener('click', () => {
    clearInterval(change);
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
  });