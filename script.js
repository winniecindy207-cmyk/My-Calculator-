function appendToDisplay(value) {
  let display = document.getElementById('display');
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById('display').innerText = '0';
}

function deleteLast() {
  let display = document.getElementById('display');
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  let display = document.getElementById('display');
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}
