var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Hello Typescript
 */
var message = 'Hello, TypeScript!';
var heading = document.createElement('h1');
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
var lastName;
var firstName = "Toan";
var age = 23;
//Arrays
var fullName = ["Ha", "Quang", "Toan"];
//Object
var person;
person = {
    name: 'Toan',
    id: 9
};
// Function
var greetings;
greetings = function (name) {
    return 'Hi ${name}';
};
/**
 * Type inference
 */
//Khai báo biến sd number đề chỉ rõ kiểu cho nó
var counter = 0;
//tham số max là số nên ts suy ra kiểu giá trị mặc định
function setCounter(max) {
    if (max === void 0) { max = 100; }
}
// TS tự suy ra kiểu increment là number
// Tương tự: function increment(counter: number) : number
function increment(counter) {
    return counter++;
}
// Kiểu của items là number, thêm "hi" sẽ là number và string
var items = [0, 1, null, "hi"];
//Không có kiểu chung nên TS suy ra kiểu liên hợp: RegExp và Date
var arr = [new Date(), new RegExp('\d+')];
//TS biết event là instance của mouseevent vì sự kiện click
document.addEventListener('click', function (event) {
    console.log(event.button);
});
/**
 * Number
 */
var price = 9.95;
console.log(price);
/**
 * String
 */
var firstName1 = "Toan";
var title = "Developer";
var profile = "I'm ".concat(firstName1, ". I'm a ").concat(title);
console.log(profile);
/**
 * Object
 */
var employee;
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
var skills = [];
skills[0] = "Problem Making";
skills[1] = 'Destroying';
skills.push('Software Design');
console.log(skills);
/**
 * Tuple
 */
var skill;
skill = ['Programing', 9];
console.log(skill);
/**
 * Enum
 */
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
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
var json = "{\"latitude\": 10.11, \"longitude\":12.12}";
var currentLocation = JSON.parse(json);
console.log(currentLocation);
/**
 * Never
 */
var loop = function forever() {
    while (true) {
        console.log('Hello');
    }
};
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    return neverOccur();
}
var neverOccur = function () {
    throw new Error('Never!');
};
var input;
input = 100; // valid
input = 'Hi'; // valid
/**
 * Literal
 */
var mouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
//  mouseEvent = 'mouseover'; // compiler error
/**
 * If else
 */
var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
}
else {
    discount = 15; // 15%
}
console.log("You got ".concat(discount, "% discount. "));
/**
 * Switch case
 */
var targetId = 'btnDelete';
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
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
/**
 * While
 */
var counter0 = 0;
while (counter0 < 5) {
    console.log(counter0);
    counter0++;
}
/**
 * Do while
 */
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);
/**
 * Break
 */
var products = [
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
function add(a, b) {
    return a + b;
}
var sum = add(10, 20);
console.log(sum);
/**
 * Optional param
 */
function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(1, 2));
/**
 * Default param
 */
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100));
/**
 * Rest param
 */
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal(10, 20));
function add2(a, b) {
    return a + b;
}
console.log(add2('13', '12'));
var Counter = /** @class */ (function () {
    function Counter() {
        this.current = 0;
    }
    Counter.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Counter;
}());
/**
 * Class
 */
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, birthDate) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var person1 = new Person('171-28-0926', 'Toan', 'Ha', new Date(1999, 11, 13));
console.log(person1.getFullName());
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person1.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Person1));
var employee1 = new Employee('John', 'Doe', 'Front-end Developer');
console.log(employee1.getFullName());
console.log(employee1.describe());
/**
 * abstract class
 */
// abstract class Employee1 {
//     constructor(private firstName: string, private lastName: string) {
//     }
//     abstract getSalary(): number
//     get fullName1(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     compensationStatement(): string {
//         return `${this.fullName1} makes ${this.getSalary()} a month.`;
//     }
// }
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
