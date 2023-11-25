// primitives - number, string, boolean

function sendSum(num1: number, num2: number, name: string, isWithName: boolean) {
  let result = isWithName ? `Hi ${name}, Sum is ${num1 + num2}` : `Sum is ${num1 + num2}`;
  return result;
}

let num1: number = 10;
let num2: number = 10;
let myName: string = 'Kavindu';
let withName: boolean = true;

let result1 = sendSum(10, 20, 'Kavindu', true);
console.log(result1);

let result2 = sendSum(10, 20, 'Kavindu', false);
console.log(result2);