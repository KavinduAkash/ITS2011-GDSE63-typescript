// class

class Person {
  name: string;
  age: number;
  readonly nic: string;

  constructor(name: string, age: number, nic: string) {
    this.name = name;
    this.age = age;
    this.nic = nic;
  }
}

let person1 = new Person('Kavindu', 28, '12312312321');
console.log(person1);
person1.name = "Janith";
console.log(person1);
// person1.nic = "ABCD"; // nic is a readonly property
// console.log(person1);