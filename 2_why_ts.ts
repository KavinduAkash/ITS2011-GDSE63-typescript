// why ts?
function sum(num1: number, num2: number) {
  return num1 + num2;
}

let n1 = '10';
let n2 = 20;

let value1 = sum(+n1, +n2);
console.log(value1);

let value2 = sum(+n1, +n2);
console.log(value2);
