// Object destructuring
// Note, in object destructuring, the variable name must match the key name in the object. order does not matter.
const person = {
    name: 'Jared',
    age: 30,
    isHackclubber: true,
    work: 'Club Operations Lead'
};

const {name, work} = person;
console.log(`${name} is the ${work} at Hackclub.`);