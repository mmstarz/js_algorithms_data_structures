/*
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object
*/

/*
var x1 = {};            // new object
var x2 = "";            // new primitive string
var x3 = 0;             // new primitive number
var x4 = false;         // new primitive boolean
var x5 = [];            // new array object
var x6 = /()/           // new regexp object
var x7 = function(){};  // new function object
*/

/* ECMAScript2015
// Shorthand property names (ES2015)
let a = 'foo', b = 42, c = {};
let o = {a, b, c};

// Shorthand method names (ES2015)
let o = {
  property(parameters) {}
};

// Computed property names (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
};
*/

/*
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
*/

let instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4, 5]
}

/* array of keys */
console.log(Object.keys(instructor));

/* list of key:value pairs */
console.log(Object.entries(instructor));

/* show object map */
console.dir(instructor);

/* object key property check for true/false */
console.log(instructor.hasOwnProperty('firstName'));

/* object key property configuration */
console.log(Object.getOwnPropertyDescriptor(instructor, 'firstName'));

/* iteration throught object values */
for (let key of Object.values(instructor)) {
    console.log('key of Object.values(): ', key);
}

for (let key of Object.entries(instructor)) {
    console.log('key of Object.entries(): ', key[0], key[1]);
}

for (const [key, value] of Object.entries(instructor)) {
    console.log('[key, value] of Object.entries(): ', key, value);
}

Object.values(instructor).forEach(value => {
    console.log('Object.values().forEach(value => ...): ', value);
})

Object.entries(instructor).forEach(([key, value]) => {
    console.log('Object.values().forEach(([key, value]) => ...): ', key, value);
});

/*  The JavaScript delete operator removes a property from an object;
    if no more references to the same property are held,
    it is eventually released automatically. */
let Employee = {
    firstname: "Mohammed",
    lastname: "Haddad"
}
console.log(Employee.firstname);
// expected output: "Mohammed"
// DELETION key from the Object
delete Employee.firstname;
console.log(Employee.firstname);
// expected output: undefined

// Клонування об'єкта
let initialObj = { a: 1 };
let copy = Object.assign({}, initialObj);
console.log(copy);  // виводить { a: 1 }
initialObj.a = 100;
console.log(copy);  // виводить { a: 1 }

// Злиття об'єктів
let zo1 = { a: 1 };
let zo2 = { b: 2 };
let zo3 = { c: 3 };
let obj = Object.assign(zo1, zo2, zo3);
console.log(obj);  // виводить { a: 1, b: 2, c: 3 }
console.log(zo1);   // виводить { a: 1, b: 2, c: 3 }, позаяк змінено сам об'єкт o1

// Злиття об'єктів з однаковими властивостями
let zov1 = { a: 1, b: 1, c: 1 };
let zov2 = { b: 2, c: 2 };
let zov3 = { c: 3 };
let zovObj = Object.assign({}, zov1, zov2, zov3);
console.log(obj);  // виводить { a: 1, b: 2, c: 3 }


// Array variable -> object[key] = param;
let adjacencyList = {
   strArray : ['one', 'two', 'three'],
};
function arrayToObject(str) { // takes string variable    
    const visited = { [str]: true };
    return console.log(visited);
}
arrayToObject('strArray');


// JSON.stringify()
const jsObject = { "name":"John", "age":"39", "city":"New York", "complete": false};
const text = JSON.stringify(jsObject, function (key, value) {
  if (key === "complete") {
    return !value;
  } if (key === 'name' ) {
    return value = 'jack'
  } else {
    return value;
  }
});
console.log(text);