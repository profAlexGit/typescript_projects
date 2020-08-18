// arrow function
const add = (a: number, b: number = 7) => a + b;
// console.log(add(2, 5));
const printOutput: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

// printOutput(add(2));

//arrays and objects

if (button) {
	button.addEventListener('click', (e) => console.log(e));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
	firstName: 'ALex',
	age: 28
};

const copiedPerson = { ...person };

const adding = (...numbers: number[]) => {
	return numbers.reduce((acc, number) => {
		return acc + number;
	}, 0);
};

const addedNumbers = adding(12, 5, 2.1, 8.6);
// console.log(addedNumbers);

const [hobby1, hobby2, ...anotherHobbies] = hobbies;
const { firstName: userName, age } = person;

