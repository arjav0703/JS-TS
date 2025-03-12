const specs = [
    { ram: 4, hdd: 100},
    { ram: 8, hdd: 200},
    { ram: 16, hdd: 500},
    { ram: 32, hdd: 1000}
]

console.log(specs.filter(res => res.hdd >= 500))


// Challenge : Filter the numbers over 18 (adult)
const ages = [32, 33, 16, 40];

console.log( ages.filter(num => num > 18))


// Challenge 2 : filter the ones that are longer than 6 characters
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

const res = words.filter(word => word.length > 6)
console.log(res)