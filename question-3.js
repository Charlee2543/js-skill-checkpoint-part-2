// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
	let Jsonplaceholder = await fetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	let data = await Jsonplaceholder.json();
	// console.log("data: ", data);
	return data;
}

const nameUser = await getUsers();
// console.log(nameUser);
// console.log("nameUser: ", nameUser);
let fillterName = [];
await nameUser
	.filter((user) => user.name.length > 17)
	.map((user) => fillterName.push(user.name));
console.log("fillterName: ", fillterName);
