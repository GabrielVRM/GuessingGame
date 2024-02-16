const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

const rondomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//function callback
function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) == rondomNumber) {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
    document.querySelector('screen2 h2').innerText(`you got it right: ${xAttempts}`);
  } else {
    alert('error');
  }
  xAttempts++;
}
//events
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', function () {});
