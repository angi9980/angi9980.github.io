function check() {
    console.log('test');
}

function submit() {
    alert("Is this your number? " + output.textContent);
}

function reset() {
    outputInt = "";
    output.textContent = outputInt;
}

function roll() {
    outputInt = randomNumber(0, 9);
    let text = "Is this the next digit in your phone number?\nOK if yes, Cancel if no.\n" + outputInt;
    if(confirm (text) === true){
        output.textContent = output.textContent + outputInt;
    }
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.roll-button').addEventListener('click', roll);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);