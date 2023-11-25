// functions

function findSum(num1: number, num2: number): number {
  return num1 + num2;
}

function findSumInString(num1: number, num2: number): string {
  return `Sum is ${num1 + num2}`;
}

const findSumInString2 = (num1: number, num2: number): string => {
  return `Sum is ${num1 + num2}`;
};




function findTheSum(num1: number | string, num2: number | string): number {
  if(typeof num1 === 'string' || typeof num2 === 'string') { // type guard
    return +num1 + +num2;
  } else {
    return num1 + num2;
  }
}


function findTheSum2(num1: number | string, num2: number | string): number | string {
  if(typeof num1 === 'string' || typeof num2 === 'string') { // type guard
    return +num1 + +num2;
  } else {
    return num1 + num2;
  }
}



let result1 = findSum(10, 20);
console.log("result1: ", result1);

let result2 = findSumInString(10, 20);
console.log("result2: ", result2);

let result3 = findSumInString2(10, 20);
console.log("result3: ", result2);

let result4 = findTheSum(100, 200);
console.log("result4: ", result4);

let result5 = findTheSum('100', 200);
console.log("result5: ", result5);