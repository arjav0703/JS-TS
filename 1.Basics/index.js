//alert('Oops, you are hacked!')

console.log('Hello, World!')

//let name = 'AJ';
//console.log(name);

//console.log(4 + 3)
//console.log('10' === 10)
//console.log( 4 !== "4" )
    
//const firstName = 'Arjav'
//const lastName = 'Jain'

const firstName = prompt("What's your first name?");
const lastName = prompt("What's your last name")

console.log(initials(firstName,lastName) + 'can be used as your initial!')

function initials(firstName, lastName) {
    return firstName.slice(0,1) + lastName.slice(0,1);
}