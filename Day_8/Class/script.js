function calculateBNCNN() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const bcnn = Math.abs(number1 - number2);
    document.getElementById('result').innerHTML = 'BCNN của hai số trên là: ' + bcnn;
}
