const score = 72;
const result = score >= 70 ? 'Pass' : 'Fail';
console.log(result);

const num = 7;
console.log(num % 2 === 0 ? 'even' : 'odd');

const user = { name: 'Jess' };

console.log(user.address?.city);

const age = 0;
console.log(age || 18);
console.log(age ?? 18);
