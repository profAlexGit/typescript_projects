function Logger(logText: string) {
    console.log("LOGGER FACTORY");
    return function (target: Function) {
        console.log(logText);
        console.log(target);
    };
}

function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}

function WithNewTemplate(template: string, hookId: string) {
    console.log("TEMPLATE FACTORY");
    return function <T extends { new (...args: any[]): { name: string } }>(
        target: T
    ) {
        return class extends target {
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
    };
}

@Logger("Logging Person...")
// @WithTemplate('<h1>My Person object</h1>', 'app')
@WithNewTemplate("<h1>My Person object</h1>", "app")
class Person {
    name = "Alex";

    constructor() {
        console.log("Creating person object...");
    }
}

const person = new Person();

console.log(person);

function Log(target: any, propertyName: string | Symbol) {
    console.groupCollapsed("Property decorator!");
    console.log("Target: ", target);
    console.log(`Property name: ${propertyName}`);
    console.groupEnd();
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.groupCollapsed("Accessor decorator!");
    console.log("Target: ", target);
    console.log(`Name: ${name}`);
    console.log("Descriptor: ", descriptor);
    console.groupEnd();
}

function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.groupCollapsed("Method decorator!");
    console.log("Target: ", target);
    console.log(`Name: ${name}`);
    console.log("Descriptor: ", descriptor);
    console.groupEnd();
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.groupCollapsed("Parameter decorator!");
    console.log("Target: ", target);
    console.log(`Name: ${name}`);
    console.log("Position: ", position);
    console.groupEnd();
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Log2
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 19);
const p2 = new Product("magazine", 5);

// -------------------------------------------------------------------------------------------------------------------------

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };

    return adjDescriptor;
    //  console.groupCollapsed("AutoBind decorator!");
    //  console.log("Target: ", target);
    //  console.log(`Method name: ${methodName}`);
    //  console.log("Descriptor: ", descriptor);
    //  console.groupEnd();
}

class Printer {
    message = "This works!!!";

    constructor(message: string) {
        this.message = message;
    }

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const printer = new Printer("First printer");
const printer2 = new Printer("Second printer");

const button = document.querySelector("button");
button?.addEventListener("click", printer.showMessage);
button?.addEventListener("click", printer2.showMessage);

// ------------------------------------------------------------------------

interface IvalidatorConfig {
    [property: string]: {
        [validatebleProp: string]: string[]; // ['required', 'positive']
    };
}

const registeredValidator: IvalidatorConfig = {};

function Required(target: any, propertyName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ["required"],
    };
}

function PositiveNumber(target: any, propertyName: string) {
    registeredValidator[target.constructor.name] = {
        ...registeredValidator[target.constructor.name],
        [propertyName]: ["positive"],
    };
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidator[obj.constructor.name];
    if (!objectValidatorConfig) {
        return true;
    }

    let isValid = true;

    for (const prop in objectValidatorConfig) {
        for (const validator of objectValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                case "positive":
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid input!!!");
        throw new Error("Invalid input!!!");
    }

    console.log(createdCourse);

    titleEl.value = "";
    priceEl.value = "";
});
