const students = [
    { id: 21, name: 'Omor Sunny' },
    { id: 31, name: 'Mannaaa' },
    { id: 41, name: 'Moyori' },
    { id: 51, name: 'Deepjol' }
];

// console.log(students[0].name)
const names = students.map(student => student.name)
const ids = students.map(student => student.id)
const bigger = students.filter(student => student.id > 40)
const biggerOne = students.find(student => student.id > 40)

console.log(names)
console.log(ids)
console.log(bigger)
console.log(biggerOne)
