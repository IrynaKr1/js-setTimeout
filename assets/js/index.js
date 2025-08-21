const timer = document.querySelector('.timer');
const button = document.querySelector('button');
const waitInfo = document.querySelector('.waitInfo');
const pageLink = document.querySelector('.pageLink');


function printNumbers(from, to, interval) {
  let current = from;

  if (current < to) {
    const timer = setInterval(() => {
      current++;
      console.log(current);
      if (current >= to) {
        clearInterval(timer);
      }
    }, interval);
  }
}

console.log(printNumbers(2, 7, 1000));
