// Object destructuring
const person = {
    name: 'Jared',
    age: 30,
    isHackclubber: true,
    work: 'Club Operations Lead'
};

const {name, work} = person;
console.log(`${name} is the ${work} at Hackclub.`);