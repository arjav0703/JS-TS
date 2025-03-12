// ARRAYS
/*
const strArray = ['eat', 'sleep', 'code', 'repeat'];
let i= 0;
do {
  console.log(strArray[i]);
  i++;
} while (i < strArray.length);
*/

// OBJECTS
function greet() {
    return `I am ${this.Firstname} ${this.Lastname} and I am ${this.age} years old. I am a ${this.proffession} at ${this.company}.`
}

const person = {
    Firstname: 'John',
    Lastname: 'Wick',
    age: 40,
    city: 'New York',
    proffession: 'Assassin',
    company: 'High Table',
    aka: 'The Boogeyman',
    friends: ['Winston', 'Charon', 'Sofia'],
    isretired: false,
    tagline: 'John is a man of focus, commitment, and sheer fuckin will.',
    greet,
};

console.log(person.tagline);
console.log(person.friends[Math.random() * person.friends.length | 0]);
console.log(person.greet())

// CALLBACK FUNCTIONS
/*
function showCallFunc(fn) {
    const i = 10;
    fn(i);
    
}

function callbackFunc(value) {
    console.log(value)
}

showCallFunc(callbackFunc);
*/