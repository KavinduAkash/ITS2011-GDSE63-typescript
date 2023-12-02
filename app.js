// heritage
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Classification;
(function (Classification) {
    Classification["MAMMAL"] = "MAMMAL";
    Classification["BIRD"] = "BIRD";
})(Classification || (Classification = {}));
var Person = /** @class */ (function () {
    function Person(name, nic, age) {
        this.classification = Classification.MAMMAL;
        this.name = name;
        this.nic = nic;
        this.age = age;
    }
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, nic, age, subject, college) {
        var _this = _super.call(this, name, nic, age) || this;
        _this.subject = subject;
        _this.college = college;
        return _this;
    }
    Teacher.prototype.getNic = function () {
        return this.nic;
    };
    return Teacher;
}(Person));
var teacher = new Teacher("Kavindu", "1232312321", 28, "CSE", "IJSE");
console.log(teacher.name);
console.log(teacher.getNic());
console.log(teacher.age);
console.log(teacher.subject);
console.log(teacher.college);
console.log(teacher.classification);
