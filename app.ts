/**
 * Hello Typescript
 */
let message: string = 'Hello, TypeScript!';

let heading = document.createElement('h1');
heading.textContent = message;

document.body.appendChild(heading);

/**
 * Type
 */
console.log('Hello'.length); //5
console.log('Hello'.toUpperCase()); //HELLO

/**
 * Annotation
 */
let lastName: string;
let firstName: string = "Toan";
const age: number = 23;

//Arrays
let fullName = ["Ha", "Quang", "Toan"];

//Object
let person: {
    name: string,
    id: number,
}

person = {
    name: 'Toan',
    id: 9
};

// Function
let greetings: (name: string) => string;

greetings = function (name: string) {
    return 'Hi ${name}';
}

/**
 * Type inference
 */

//Khai báo biến sd number đề chỉ rõ kiểu cho nó
let counter: number = 0;

//tham số max là số nên ts suy ra kiểu giá trị mặc định
function setCounter(max = 100) {

}

// TS tự suy ra kiểu increment là number
// Tương tự: function increment(counter: number) : number
function increment(counter: number) {
    return counter++;
}

// Kiểu của items là number, thêm "hi" sẽ là number và string
let items = [0, 1, null, "hi"];

//Không có kiểu chung nên TS suy ra kiểu liên hợp: RegExp và Date
let arr = [new Date(), new RegExp('\d+')];

//TS biết event là instance của mouseevent vì sự kiện click
document.addEventListener('click', function (event) {
    console.log(event.button);
});

/**
 * Number
 */
let price: number = 9.95;
console.log(price);

/**
 * String
 */
let firstName1: string = `Toan`;
let title: string = `Developer`;
let profile: string = `I'm ${firstName1}. I'm a ${title}`;

console.log(profile);

/**
 * Object
 */
let employee: object;

employee = {
    firstName: 'Toan',
    lastName: 'Ha',
    age: 23,
    jobTitle: 'Developer'
};

console.log(employee);

/**
 * Array
 */
let skills: string[] = [];
skills[0] = "Problem Making";
skills[1] = 'Destroying';
skills.push('Software Design');
console.log(skills);

/**
 * Tuple
 */
let skill: [string, number];
skill = ['Programing', 9];

console.log(skill);

/**
 * Enum
 */
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jul));

/**
 * Any Type
 */
const json = `{"latitude": 10.11, "longitude":12.12}`;

const currentLocation = JSON.parse(json);
console.log(currentLocation);

/**
 * Never
 */
let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}

/**
 * Alias
 */
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid

/**
 * Literal
 */
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//  mouseEvent = 'mouseover'; // compiler error

/**
 * If else
 */
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)

/**
 * Switch case
 */
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}

/**
 * For
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * While
 */
let counter0 = 0;

while (counter0 < 5) {
    console.log(counter0);
    counter0++;
}

/**
 * Do while
 */
let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);

/**
 * Break
 */
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var j = 0; j < products.length; j++) {
    if (products[j].price == 900)
        break;
}

console.log(products[j]);

/**
 * Function
 */
function add(a: number, b: number): number {
    return a + b;
}

let sum = add(10, 20);
console.log(sum);

/**
 * Optional param
 */
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(1, 2));

/**
 * Default param
 */
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100));

/**
 * Rest param
 */
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal(10, 20));

/**
 * Overload
 */

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: any, b: any): any {
    return a + b;
}

console.log(add2('13', '12'));

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

/**
 * Class
 */
class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    readonly birthDate: Date;

    constructor(ssn: string, firstName: string, lastName: string, birthDate: Date) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

let person1 = new Person('171-28-0926', 'Toan', 'Ha', new Date(1999, 11, 13));
console.log(person1.getFullName());

class Person1 {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person1 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }
}

let employee1 = new Employee('John', 'Doe', 'Front-end Developer');
console.log(employee1.getFullName());
console.log(employee1.describe());

/**
 * abstract class
 */
abstract class Employee1 {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName1(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName1} makes ${this.getSalary()} a month.`;
    }
}


function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));