// Creating an object using ES6 class syntax
// ES6, also known as ECMAScript 2015, introduced several new features and syntax improvements to JavaScript.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

// Creating instances of the Person class
const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

// Accessing object properties and methods
console.log(alice.name); // Output: Alice
alice.greet(); // Output: Hello, my name is Alice
console.log(bob.name); // Output: Bob
bob.greet(); // Output: Hello, my name is Bob