const timer = document.querySelector('.timer');
const button = document.querySelector('button');
const waitInfo = document.querySelector('.waitInfo');
const pageLink = document.querySelector('.pageLink');

waitInfo.style.display = 'none';
pageLink.style.display = 'none';

function printNumbers(from, to, interval) {
  let current = from;
  timer.textContent = from;

  if (current < to) {
    const intervals = setInterval(() => {
      current++;
      timer.textContent = current;

      if (current >= to) {
        clearInterval(intervals);
      }
    }, interval);
  }
}

//printNumbers(2,1,1000);

function startCountdown(totalSeconds) {
  let remaining = totalSeconds;

  function formatTime(seconds) {
    const date = new Date(seconds * 1000);
    const minutes = date.getUTCMinutes();
    const secs = date.getUTCSeconds();
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }

  waitInfo.textContent = `Wait ${formatTime(remaining)}`;
  waitInfo.style.display = 'block';

  const countdownInterval = setInterval(() => {
    remaining--;

    if (remaining > 0) {
      waitInfo.textContent = `Wait ${formatTime(remaining)}`;
    } else {
      clearInterval(countdownInterval);
      waitInfo.style.display = 'none';
      pageLink.style.display = 'inline-block';
    }
  }, 1000);
}

printNumbers(1, 15, 1000);

button.addEventListener('click', () => {
  button.style.display = 'none';

  startCountdown(5);
});
