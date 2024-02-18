// variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let rondomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//events
btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", handleReset);
document.addEventListener("keydown", handleKeydown);

//function callback
function handleClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("numbers 0 to 10");
  }

  if (Number(inputNumber.value) == rondomNumber) {
    toogleScreen();
    document.querySelector(
      ".screen2 h2"
    ).innerText = `you got it right: ${xAttempts}`;
  }
  inputNumber.value = "";
  xAttempts++;
}
function handleReset() {
  toogleScreen();
  rondomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}
function handleKeydown(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleReset();
  }
}
function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
