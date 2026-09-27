const aboutMe = {
	name: 'Jess',
	age: 20,
	course: 'BSIS',
	introduce: function () {
		console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
	}
};

aboutMe.hobby = 'Singing';
aboutMe.introduce();
