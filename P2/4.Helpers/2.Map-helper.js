// Map helper

// Challenge

arr = [3,6,7,2,6,8,1]

const result = arr.map(tenx = arr => arr * 10)

console.log(result)


const specs = [
    { ram: 4, hdd: 100},
    { ram: 8, hdd: 200},
    { ram: 16, hdd: 500},
    { ram: 32, hdd: 1000}
]

console.log(specs.filter(res => res.hdd >= 500))