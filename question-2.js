const students = [
	{ name: "Alice", score: 42 },
	{ name: "Bob", score: 55 },
	{ name: "Charlie", score: 68 },
	{ name: "David", score: 48 },
	{ name: "Eve", score: 91 },
];
// console.log("students: ", students[1]);

const scoreCriteria = students
	.filter((newScore) => {
		return newScore.score > 50;
	})
	.map((newScore) => Math.floor(newScore.score * 1.1))
	.reduce((previous, cur) => {
		console.log(cur);
		return (previous += cur);
	}, 0);
console.log(`"Total score is ${scoreCriteria}"`);

// เริ่มเขียนโค้ดตรงนี้
