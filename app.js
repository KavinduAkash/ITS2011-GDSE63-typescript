// generic
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var array1 = [1, 2, 3, 4, 5, 6, 7];
var array2 = ["Hello", "IJSE", "GDSE", "TypeScript"];
var array3 = [new Student("Kavindu", 28),
    new Student("Kalum", 25),
    new Student("Pathum", 20)];
var array4 = [true, false, true, false];
// function removeLastItem(array: (number | string | Student | boolean)[]): (number | string | Student | boolean)[] {
//   return array.slice(0, array.length - 1);
// }
function removeLastItem(array) {
    return array.slice(0, array.length - 1);
}
var result1 = removeLastItem(array1);
console.log(result1);
var result2 = removeLastItem(array2);
console.log(result2);
var result3 = removeLastItem(array3);
console.log(result3);
var result4 = removeLastItem(array4);
console.log(result4);
