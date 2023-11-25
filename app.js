// primitives - number, string, boolean
function sendSum(num1, num2, name, isWithName) {
    var result = isWithName ? "Hi ".concat(name, ", Sum is ").concat(num1 + num2) : "Sum is ".concat(num1 + num2);
    return result;
}
var num1 = 10;
var num2 = 10;
var myName = 'Kavindu';
var withName = true;
var result1 = sendSum(10, 20, 'Kavindu', true);
console.log(result1);
var result2 = sendSum(10, 20, 'Kavindu', false);
console.log(result2);
