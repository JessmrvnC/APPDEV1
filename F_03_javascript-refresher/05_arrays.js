let favoriteFoods = ['Pasta', 'Sinigang', 'Sisig'];
favoriteFoods.push('kare-kare');
favoriteFoods.shift();

for (const food of favoriteFoods) {
	console.log(food);
}

const liked = favoriteFoods.map(food => 'I like ' + food);
console.log(liked);
