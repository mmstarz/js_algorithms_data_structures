/* What is class?
A blueprint for creating objects with pre-defined properties and methods.

MDN:
JavaScript classes, introduced in ECMAScript 2015,
are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.
The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

Why do we need to learn this?
Going to implement data structures as classes.

/* SYNTAX */
/* 
When a new student is created assign this two properties to the individual student object.
this. - refers to the individual instance(assignment) of that class.

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }
}

The method to create new objects must be called constructor!
The constructor function is a special function that,
gets run when the class is instantiated.
The class keyword create a constan so you can`t redefine it!
Watch out for the syntax as well!

When use the new keyword on pattern it creates(extensiate, assign) new instance(object).
let firstStudent = new Student('Colt', 'Steele');
let secondStudent = new Student('Blue', 'Steele');

'this.'
Inside all of our instance methods and constructor,
the keyword 'this' refers to the object created from that class(also known as instance).
*/

// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.grade = year
//     }
// }
// 
// let emil = new Student('Emil', 'Katz', 3);
// let colt = new Student('Colt', 'Steele');
// console.log(`${emil.firstName} ${emil.lastName} have grade of ${emil.grade}`);
// console.log(`${colt.firstName} ${colt.lastName} have grade of ${colt.grade}`);


/* Instance METHODS */

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.absentTimes = 0;
        this.scores = [];
    }
    // return an array for individual instance 
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}.`;
    }
    // increment absentTimes
    markAbsent() {
        this.absentTimes += 1;
        if (this.absentTimes >= 3) {
            return `Call parents!`;
        }
        return `${this.firstName} ${this.lastName} has been absent ${this.absentTimes} times.`;
    }
    // add score to the individual instance
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    // calculate average
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b; });
        return sum / this.scores.length;
    }

}

let firstStudent = new Student('Colt', 'Steele', 3);
let secondStudent = new Student('Blue', 'Steele', 1);

// obvious there are two way for doing this,
secondStudent.scores.push(5);
// but conventional(звичайний) way is to assign method for this.
secondStudent.addScore(4);
secondStudent.addScore(100);
let scores = secondStudent.scores;
console.log(`${secondStudent.firstName} ${secondStudent.lastName} has scores: ${scores}`);
console.log('secondStudent.calculateAverage(): ', secondStudent.calculateAverage());

console.log(firstStudent.fullName()); // Your full name is Colt Steele.
console.log(secondStudent.fullName()); // Your full name is Blue Steele.
console.log(firstStudent.markAbsent()); // Colt Steele has been absent 1 times.
console.log(firstStudent.markAbsent()); // Colt Steele has been absent 2 times.
console.log(firstStudent.markAbsent()); // Call parents!

/* other example */
// let data = new Array(1,2,3); // Array is a blueprint
// data.push(4); // .push() is a method
// console.log(data); // [1, 2, 3, 4];