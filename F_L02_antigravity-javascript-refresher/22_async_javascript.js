function fetchUserMock(callback) {
	setTimeout(() => {
		callback({ name: 'Jess', age: 21 });
	}, 1000);
}

fetchUserMock((user) => {
	console.log('Got user:', user);
});

function fetchUser() {
	return new Promise((resolve) => {
		setTimeout(() => resolve({ name: 'Jess', age: 20 }), 1000);
	});
}

async function showUser() {
	try {
		const user = await fetchUser();
		console.log('Got user:', user);
	} catch (error) {
		console.log('Failed to load user');
	}
}

showUser();
