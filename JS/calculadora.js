document.getElementById('add').onclick = function() {
    calcular('+');
};

document.getElementById('subtract').onclick = function() {
    calcular('-');
};
document.getElementById('add').onclick = function() {
    calcular('*');
};

document.getElementById('subtract').onclick = function() {
    calcular('/');
};

function calcular(operación) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado;

    switch (operación) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        }
        {
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        }

    document.getElementById('result').innerText = 'Resultado: ' + resultado;
}