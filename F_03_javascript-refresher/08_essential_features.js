const hobbies = ['singing', 'gaming', 'cooking'];
hobbies.map(hobby => console.log(hobby));

const student = { name: 'Jess', age: 20 };
const { name, age } = student;
console.log(name, age);

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
