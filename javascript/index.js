var b = 6 // global scope / function scope
let a = 9; // block scope


var a1 = 10;
{
    var a1 = 11;
    console.log(a1);
}
console.log(a1);

let b1 = 10;
{
    let b1 = 11;
    console.log(b1);
}
console.log(b1);


const c1 = 12;
c1 = 15;
console.log(c1);


