/*
let password; 

password = prompt('Set a password between 8 to 12 characters')
if (password !== null) {
    password = password.toString()
}

if (password.length < 8) {
    console.log('password is too short')
} else if (password.length > 12) {
    console.log('Password too long')
} else {
    console.log('Password created succesfully!')
}
*/

let fruit = 'Apple';

switch (fruit.toLowerCase) {
    case 'apple':
        console.log('How you like them apples?')
    case 'orange':
        console.log('Not a fan of oranges')
    case 'banana':
        console.log('Bananas are kinda mid')
    default:
        console.log('ahh! never heard of that fruit :(')
}