let inputBox = document.getElementById("resultBox");

function inputs(input) {
    if (inputBox.innerText === '0') {
        inputBox.innerText = input;
    }else {
        inputBox.innerText += input;
    }
}

function clearBox() {
    inputBox.innerText = '0';
}

function backspace() {
    if (inputBox.innerText.length === 1) {
        inputBox.innerText = '0';
    }else {
        inputBox.innerText = inputBox.innerText.slice(0, -1);
    }
}

function calculate() {
    let result = inputBox.innerText;
    let times = document.getElementById('times').innerText;
    let div = document.getElementById('div').innerText;
    result = result.replaceAll(times, '*');
    result = result.replaceAll(div, '/');

    try {
        inputBox.innerText = eval(result);
    }
    catch {
        alert('Error: Input yang dimaksukkan tidak bisa dihitung!');
        inputBox.innerText = '0';
        return;
    }

    if (inputBox.innerText === "Infinity" || inputBox.innerText === "-Infinity") {
        alert('Error: Tidak bisa dibagi dengan 0!');
        inputBox.innerText = '0';
        return;
    }

    if (result !== inputBox.innerText) {
        let history = document.getElementById('history');
        let newHistory = document.createElement('p');
        const time = new Date();
        newHistory.innerText = result + ' = ' + inputBox.innerText + ' (' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ')';
        history.appendChild(newHistory);
    }
}

function openHistory() {
    const history = document.getElementById('historyLayout');
    history.style.display = 'block';
}

function closeHistory() {
    const history = document.getElementById('historyLayout');
    history.style.display = 'none';
}

function openHistoryPhone() {
    const calc = document.getElementById('calcLayout');
    const history = document.getElementById('historyLayout');
    calc.style.display = 'none';
    history.style.display = 'block';
}

function closeHistoryPhone() {
    const history = document.getElementById('historyLayout');
    const calc = document.getElementById('calcLayout');
    calc.style.display = 'block';
    history.style.display = 'none';
}