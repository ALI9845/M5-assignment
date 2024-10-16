// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
}
// COLLECT FIRST NUMBER FROM USER
let num1 = parseFloat(prompt('Enter the first number:'))
if (isNaN(num1)) {
    alert('Invalid input. Please enter a valid number.')
    continue
}

// COLLECT SECOND NUMBER FROM USER
let operation = prompt('Enter the operation (add, subtract, multiply, divide):').toLowerCase()
result = calculate(num1, num2, operation) {

}if (result === null) {
            alert('Invalid operation. Please choose add, subtract, multiply, or divide.');
        } else {
            alert(`The result of ${operation}ing ${num1} and ${num2} is ${result}.`);
        }
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
runCalculator()
