let a = undefined;
let b = null;
let c = ["Rohan", "Manash", 'Shakshi2', 'Ishita'];
// console.log(c.slice(0, 3));
// console.log(c.splice(0, 2));
// console.log(c);
// console.log(c.at(1))
// c.push("hello")
// c.unshift("tiger")
// c.pop()
// c.shift()
// let d = ['animal', 'cow', 'remote']
// c = c.concat(d)

// for (let i = 0; i < c.length; i++) {
//     const element = c[i];
//     console.log(i + 1 + ". " + element);
// }


let userA = {
    name: "Rohan",
    class: 5,
    age: 10,
    marks: 89.5,
    sub: ['ben', 'eng', 'math']
}
console.log(userA['kushvi']);
console.log(Object.keys(userA));
console.log(Object.values(userA));
console.log(Object.length);



let myUsersData = [
    {
        name: "Rohan",
        class: 5,
        age: 10,
        marks: 89.5,
        sub: ['ben', 'eng', 'math']
    },
    {
        name: "Ishita",
        class: 6,
        age: 12,
        marks: 78.8,
        sub: ['ben', 'eng', 'math']
    },
    {
        name: "Hitachi",
        class: 4,
        age: 9,
        marks: 84.6,
        sub: ['ben', 'eng', 'math']
    }
]

for (let i = 0; i < myUsersData.length; i++) {
    const element = myUsersData[i];
    // console.log(element.name + " -> " + element['marks'] + " (" + element['sub'] + ")");
    console.log(`${element.name} -> ${element.marks} (${element.sub})`);

}


