const timer = document.querySelector('.timer');
const button = document.querySelector('button');
const waitInfo = document.querySelector('.waitInfo');
const pageLink = document.querySelector('.pageLink');

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

printNumbers(2,15,1000);
