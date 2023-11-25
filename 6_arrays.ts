// arrays

let num_array: number[] = [1, 2, 3, 4];
let str_array: string[] = ['ranil', 'mahinda', 'gota'];
let str_num_array: (number | string)[] = [1, 2, 'ranil', 3, 'mahinda', 'gota'];

let student1 = { id: 1, name: 'Kavindu', age: 28, faculty: 'CSE' };
let student2 = { id: 2, name: 'Janith', age: 25, faculty: 'TONIC' };

let student3 = { id: 3, name: 'Kalum', age: 20, faculty: 'TONIC', uni: 'UoC' };

let students: {id: number; name: string; age: number; faculty: string, uni?: string}[] = [];

students.push(student1);
students.push(student2);
students.push(student3);