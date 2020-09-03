// const names: Array<string> = ["Alex", "Marija"];

// const promise: Promise<string> = new Promise((res) => {
//   setTimeout(() => {
//     res("This is done!");
//   }, 200);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// -----------------------------------------------------------------------------------------

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: "Alex", hobbies: ["programming"] }, { age: 28 });
// console.log(mergeObj);

// interface Ilengthy {
//   length: number;
// }

// function countAndPrint<T extends Ilengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value.";
//   if (element.length === 1) {
//     descriptionText = `Got 1 element`;
//   } else if (element.length > 0) {
//     descriptionText = `Got ${element.length} elements`;
//   }
//   return [element, descriptionText];
// }

// console.log(countAndPrint(["Programming", "cooking", [1, 2, 3]]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return `Value: ${obj[key]}`;
// }

// console.log(extractAndConvert({ name: "Alex", age: 28 }, "name"));

// ------------------------------------------------------------------------------------------------------------

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     const removeIdx = this.data.indexOf(item);
//     if (removeIdx === -1) return;
//     this.data.splice(removeIdx, 1);
//   }

//   getItems() {
//     return this.data;
//   }
// }

// const textStorage = new DataStorage<string>();
// const numberStorage = new DataStorage<number>();
// const objectStorage = new DataStorage<object>();

// numberStorage.addItem(10);
// numberStorage.addItem(28);
// numberStorage.addItem(45);
// textStorage.addItem("Hi");
// textStorage.addItem("Alex");
// textStorage.addItem("Frontend");

// const AlexObj = { name: "Alex" };
// const ManuObj = { name: "Manu" };
// const secretNameObj = { name: "secretName" };

// objectStorage.addItem(AlexObj);
// objectStorage.addItem(ManuObj);
// objectStorage.addItem(secretNameObj);

// numberStorage.removeItem(45);
// textStorage.removeItem("Hi");
// objectStorage.removeItem(ManuObj);

// console.log(`Number storage: ${numberStorage.getItems()}`);
// console.log(`Text storage: ${textStorage.getItems()}`);
// console.log("Object storage: ", objectStorage.getItems());

// ----------------------------------------------------------------------------------------------------------------------

interface IcourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): IcourseGoal {
  let courseGoal: Partial<IcourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as IcourseGoal;
}

const names: Readonly<string[]> = ['Alex', 'Marija'];
// names.push('Aleksei');
