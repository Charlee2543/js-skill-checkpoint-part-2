const techupPeople = [
	{ name: "Alice", age: 17 },
	{ name: "Bob", age: 22 },
	{ name: "Charlie", age: 16 },
];

const techcoolPeople = [
	{ name: "David", age: 25 },
	{ name: "Eve", age: 19 },
];
const allPeople = [...techupPeople, ...techcoolPeople].filter(
	(score) => score.age < 20
);
console.log("allPeople: ", allPeople);
/* let filterAllPeople = allPeople.filter((score) => score.age < 20);
console.log("filterAllPeople: ", filterAllPeople);
console.log("allPeople: ", allPeople); */
// เริ่มเขียนโค้ดตรงนี้
