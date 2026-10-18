const person = { name: 'Alex', age: 28 };
const { name, age } = person;
console.log(name, age);

const hobbies = ['reading', 'hiking', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
	console.log(name);
}

printName(person);
