// interface Iadmin {
// 	name: string;
// 	privileges: string[];
// }
//
// interface Iemployee {
// 	name: string;
// 	startDate: Date;
// }
//
// interface IelevatedEmployee extends Iadmin, Iemployee {}

type Tcombinable = string | number;
type Tnumeric = number | boolean;
type Tuniversal = Tcombinable & Tnumeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: string, b: number): string;
function add(a: Tcombinable, b: Tcombinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Alex", "Front");
result.split("");

const fetchedUserData = {
  id: "u1",
  name: "Alex",
  job: {
    title: "frontend developer",
    description: "RIO-soft",
  },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);


// type Tadmin = {
//   name: string;
//   privileges: string[];
// };

// type Temployee = {
//   name: string;
//   startDate: Date;
// };

// // interface IelevatedEmployee extends Iadmin, Iemployee {}
// type TelevatedEmployee = Tadmin & Temployee;

// const employee: TelevatedEmployee = {
//   name: "Alex",
//   privileges: ["create-server", "read-userInformation"],
//   startDate: new Date(),
// };

// type Tcombinable = string | number;
// type Tnumeric = number | boolean;

// type Tuniversal = Tcombinable & Tnumeric;

// type TunknownEmployee = Temployee | Tadmin;

// function printEmployeeInformation(emp: TunknownEmployee) {
//   console.log(`Name: ${emp.name}`);
//   if ("privileges" in emp) {
//     console.log(`Privileges: ${emp.privileges}`);
//   }
//   if ("startDate" in emp) {
//     console.log(`Start date: ${emp.startDate}`);
//   }
// }

// printEmployeeInformation(employee);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log(`Loadin cargo... ${amount}`);
//   }
// }

// type Tvehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Tvehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Ibird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Ihorse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Tanimal = Ibird | Ihorse;

// function moveAnimal(animal: Tanimal) {
//   let speed: number;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//     default:
//       speed = 0;
//   }
//   console.log(`Moving with speed: ${speed}`);
// }

// const bird: Ibird = {
//   type: "bird",
//   flyingSpeed: 10,
// };

// const horse: Ihorse = {
//   type: "horse",
//   runningSpeed: 5,
// };

// moveAnimal(bird);
// moveAnimal(horse);

// const paragraph = document.getElementById("message-output");

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// // const userInput = document.getElementById('user-input') as HTMLInputElement;

// if (userInput) {
//   userInput.value = "Hi there!";
// }

// interface IerrorContainer {
//   [key: string]: string;
// }

// const errorBag: IerrorContainer = {
//   email: "Not a valid Email",
//   userName: 'Must start with a capital character'
// };
