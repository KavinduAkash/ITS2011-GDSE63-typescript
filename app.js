var Person = /** @class */ (function () {
    function Person(name, age, nic) {
        this.name = name;
        this.age = age;
        this.nic = nic;
    }
    Person.prototype.getNic = function () {
        return this.nic;
    };
    return Person;
}());
var person1 = new Person('Kavindu', 28, '12312312321');
console.log(person1.name);
// console.log(person1.nic); // can't access nic directly because nic is private attribute
console.log(person1.getNic());
var DBConnection = /** @class */ (function () {
    function DBConnection(value) {
        DBConnection.connection = value;
    }
    DBConnection.getConnection = function () {
        if (!DBConnection.connection) {
            new DBConnection('test-connection');
        }
        return DBConnection.connection;
    };
    return DBConnection;
}());
var connection = DBConnection.getConnection();
console.log('Connection: ', connection);
