const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

const lines = [
  "I am a front-end developer",
  "I am a content writer"
];
let currentLineIndex = 0;

function animateLines() {
  setTimeout(() => {
    eraseLine(line2, line2.innerText, 0, showNextLine);
  }, 1000);
}

function eraseLine(element, text, index, callback) {
  if (index >= text.length) {
    element.style.opacity = '0';
    setTimeout(callback, 1000);
    return;
  }

  setTimeout(() => {
    element.innerText = text.slice(0, index);
    eraseLine(element, text, index + 1, callback);
  }, 100);
}

function showNextLine() {
  currentLineIndex++;
  if (currentLineIndex >= lines.length) {
    currentLineIndex = 0;
  }

  setTimeout(() => {
    eraseLine(line3, line3.innerText, 0, showCurrentLine);
  }, 500);
}

function showCurrentLine() {
  const currentLine = lines[currentLineIndex];
  setTimeout(() => {
    line3.innerText = currentLine;
    fadeIn(line3);
    setTimeout(() => {
      animateLines();
    }, 2000);
  }, 500);
}

function fadeIn(element) {
  let opacity = 0;

  const interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
    }

    element.style.opacity = opacity.toString();
    opacity += 0.1;
  }, 100);
}

showCurrentLine();
