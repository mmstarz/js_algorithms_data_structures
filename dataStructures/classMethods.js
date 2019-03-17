/* The static keyword defines a static method for a class.
Static methods are called without instantiating their class
and cannot be called through a class instance.
Static methods are often used to create utility functions for an application.

'this.'
Inside all of our instance methods and constructor,
the keyword 'this' refers to the object created from that class(also known as instance).

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    // Math.hypot() function returns the square root
    // of the sum of squares of its arguments.
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
*/

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
        return `${this.firstName} ${this.lastName}`;
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
    // Utility function of a class. It`s not related to the individual instance.
    static enrollStudents(...students) {
        // send an email here
        // return `${students[0].fullName()}, ${students[1].fullName()}`;
        return students.map(person => {
            return person.fullName();
        });
    }

    static enrolling() {
        return "ENROLLNG STUDENTS..."
    }
}

let firstStudent = new Student('Colt', 'Steele', 3);
let secondStudent = new Student('Blue', 'Steele', 1);
console.log(Student.enrolling());
console.log(Student.enrollStudents(firstStudent, secondStudent));
