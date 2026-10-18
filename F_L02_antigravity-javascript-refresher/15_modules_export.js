const userInfo = { name: 'Jess', age: 20 };

function greet() {
	return 'Hello from module!';
}

export default greet;
export { userInfo };
