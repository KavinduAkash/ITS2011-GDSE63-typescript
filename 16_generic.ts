// generic

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let array1: number[] = [1, 2, 3, 4, 5, 6, 7];
let array2: string[] = ["Hello", "IJSE", "GDSE", "TypeScript"];
let array3: Student[] = [new Student("Kavindu", 28),
  new Student("Kalum", 25),
  new Student("Pathum", 20)];
let array4: boolean[] = [true, false, true, false];


// function removeLastItem(array: (number | string | Student | boolean)[]): (number | string | Student | boolean)[] {
//   return array.slice(0, array.length - 1);
// }

function removeLastItem<T>(array: T[]): T[] {
  return array.slice(0, array.length - 1);
}


let result1 = removeLastItem<number>(array1);
console.log(result1);
let result2 = removeLastItem<string>(array2);
console.log(result2);
let result3 = removeLastItem<Student>(array3);
console.log(result3);
let result4 = removeLastItem<boolean>(array4);
console.log(result4);

class SmartArray<T> {
  private array: T[];

  constructor(array: T[]) {
    this.array = array;
  }
}

new SmartArray<number>(array1);
new SmartArray<string>(array2);
new SmartArray<Student>(array3);
new SmartArray<boolean>(array4);
