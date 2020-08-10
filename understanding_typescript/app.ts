function add(num1: number, num2: number, printResult: boolean, phrase: string) {

	const result = num1 + num2;
	if (printResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';


add(number1, number2, printResult, resultPhrase);