abstract class Department {
	// private readonly id: string;
	// private name: string;
	static fiskalYear = 2020;
	protected employees: string[] = [];

	protected constructor(protected readonly id: string, public name: string) {
		// this.id = id;
		// this.name = n;
	}

	static createEmployee(name: string) {
		return {name: name};
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(`Количество сотрудников: ${this.employees.length}`);
		console.log(`Список сотрудников: ${this.employees}`);
	}
}

class ITDepartment extends Department {
	admins: string[];

	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}

	describe() {
		console.log(`IT department id: ${this.id}`)
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error("No report found");
	}

	set mostRecentReport(report: string) {
		if (!report.trim()) {
			throw new Error('Please pass in a valid report');
		}
		this.addReport(report);
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('id_2', []);
		return this.instance;
	}

	private constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.reports = reports;
		this.lastReport = reports[0];
	}

	describe() {
		console.log(`Accounting department id: ${this.id}`)
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	public addEmployee(name: string) {
		if (name !== 'Alex'){
			// super.addEmployee(name);
			this.employees.push(name);
		}
	}

	printReport() {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee('Alex');
console.log(employee1);
console.log(`Fiskal year: ${Department.fiskalYear}`);

const it = new ITDepartment('id_1', ['Alex']);
// const accounting = new AccountingDepartment('id_2', []);
const accounting = AccountingDepartment.getInstance();

accounting.addReport('report_1');
accounting.addReport('report_2');
accounting.addReport('report_3');

accounting.addEmployee('Alex');
accounting.addEmployee('Aleksey');

console.groupCollapsed("ITDepartment");
it.describe();
it.addEmployee('Alex');
it.addEmployee('Max');
it.addEmployee('John');
it.printEmployeeInformation();
console.groupEnd();

console.groupCollapsed("AccountingDepartment");
accounting.describe();
accounting.printEmployeeInformation();
console.log(`Most recent report: ${accounting.mostRecentReport}`);
accounting.mostRecentReport = 'recentReport';
console.log(`Most recent report: ${accounting.mostRecentReport}`);
accounting.printReport();
console.groupEnd();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe();

