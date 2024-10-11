function appendToDisplay(value) { // Este agrega el valor recibido al contenido actual del elemento con id 'display'
    document.getElementById('display').value += value;
}

function clearDisplay() { // Limpia el contenido del elemento con id 'display', dejándolo vacío
    document.getElementById('display').value = '';
}

function deleteLast() { // Obtiene el valor actual del elemento con id 'display'
    let displayValue = document.getElementById('display').value; // Es el que elimina el último carácter del valor actual del elemento con id 'display'
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculateResult() {
    try {
        // Evalúa la expresión matemática en el elemento con id 'display' y almacena el resultado
        let result = eval(document.getElementById('display').value);
        // Muestra el resultado en el elemento con id 'display'
        document.getElementById('display').value = result;
    } catch (error) {
        // Si ocurre un error durante la evaluación, muestra una alerta indicando que la expresión es inválida
        alert('Expresión inválida');
    }
}