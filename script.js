// script.js
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let expression = document.getElementById('display').value;

    try {
        // Replace ^ with ** for exponentiation
        expression = expression.replace(/\^/g, '**');
        // Evaluate the expression
        let result = eval(expression);
        // Handle special cases
        if (result === Infinity || result === -Infinity) {
            result = 'Error';
        }
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
