// type IFadd = (a: number, b: number) => number;

interface IFadd {
	(a: number, b: number): number
}

let add: IFadd;

add = (n1: number, n2: number) => n1 + n2;


interface Inamed {
	//optional properties
	readonly name?: string;
	outputName?: string;
}

interface Igreetable extends Inamed {
	//properties

	//functions
	greet(phrase: string): void;
}

class Person implements Igreetable {
	name?: string;
	age: number = 28;

	constructor(n?: string) {
		this.name = n;
	}

	public greet(phrase: string): void {
		this.name ?
			console.log(`Hello, my name is ${this.name}`):
			console.log(`Hi, I don't have a name`);

		console.log(`I want to say: ${phrase}`);
	}
}

const user1 = new Person('Alex');
user1.greet('Hello world');

const user2 = new Person();
user2.greet('Hello world');