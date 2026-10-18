function greet(name, course) {
	if (course) {
		return 'Hello, ' + name + '! You are taking ' + course + '.';
	}
	return 'Hello, ' + name;
}

const square = (num) => {
	return num * num;
};

const cube = (num) => {
	return num * num * num;
};

function calculator(a, b) {
	return {
		sum: a + b,
		difference: a - b,
		product: a * b,
		quotient: a / b
	};
}

function isEven(num) {
	return num % 2 === 0;
}

console.log(greet('Jess', 'BSIS'));
console.log(square(4));
console.log(cube(3));
console.log(calculator(10, 2));
console.log(isEven(4));
console.log(isEven(7));
