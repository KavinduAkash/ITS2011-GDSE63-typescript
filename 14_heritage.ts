// heritage

enum Classification {
  MAMMAL= "MAMMAL",
  BIRD = "BIRD"
}

interface Animal {
  classification: Classification;
}

class Person implements Animal {
  name: string;
  protected nic: string;
  age: number;
  classification: Classification = Classification.MAMMAL;

  constructor(name: string, nic: string, age: number) {
    this.name = name;
    this.nic = nic;
    this.age = age;
  }

}

class Teacher extends Person {
  subject: string;
  college: string;

  constructor(name: string, nic: string, age: number, subject: string, college: string) {
    super(name, nic, age);
    this.subject = subject;
    this.college = college;
  }

  getNic(): string {
    return this.nic;
  }

}

let teacher = new Teacher("Kavindu", "1232312321", 28, "CSE", "IJSE");
console.log(teacher.name);
console.log(teacher.getNic());
console.log(teacher.age);
console.log(teacher.subject);
console.log(teacher.college);
console.log(teacher.classification);