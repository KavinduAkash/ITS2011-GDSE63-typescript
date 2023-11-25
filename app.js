// functions
function findSum(num1, num2) {
    return num1 + num2;
}
function findSumInString(num1, num2) {
    return "Sum is ".concat(num1 + num2);
}
var findSumInString2 = function (num1, num2) {
    return "Sum is ".concat(num1 + num2);
};
function findTheSum(num1, num2) {
    if (typeof num1 === 'string' || typeof num2 === 'string') { // type guard
        return +num1 + +num2;
    }
    else {
        return num1 + num2;
    }
}
var result1 = findSum(10, 20);
console.log("result1: ", result1);
var result2 = findSumInString(10, 20);
console.log("result2: ", result2);
var result3 = findSumInString2(10, 20);
console.log("result3: ", result2);
var result4 = findTheSum(100, 200);
console.log("result4: ", result4);
var result5 = findTheSum('100', 200);
console.log("result4: ", result5);
