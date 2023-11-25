class Person {
  public name: string;
  public age: number;
  private nic: string;

  constructor(name: string, age: number, nic: string) {
    this.name = name;
    this.age = age;
    this.nic = nic;
  }

  getNic() {
    return this.nic;
  }
}

let person1 = new Person('Kavindu', 28, '12312312321');
console.log(person1.name);
// console.log(person1.nic); // can't access nic directly because nic is private attribute
console.log(person1.getNic());


class DBConnection {
  private static connection: string;

  private constructor(value: string) {
    DBConnection.connection = value;
  }

  static getConnection() {
    if(!DBConnection.connection) {
      new DBConnection('test-connection');
    }
    return DBConnection.connection;
  }
}

let connection: string = DBConnection.getConnection();
console.log('Connection: ', connection);





