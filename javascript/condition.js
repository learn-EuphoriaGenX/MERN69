let num = 99;
if (num > 500) {
    if (num > 750) {
        console.log("Num is greter than 500 and 750");
    } else {
        console.log("Num is only grater than 500");
    }
} else if (num > 100) {
    if (num > 250) {
        console.log("Num is greter than 250 and 100");
    } else {
        console.log("Num is only grater than 100");
    }
} else {
    console.log("Num is Less than 100")
}


let hel = false
let lic = false
let ins = false

let fine = 0
if (!hel) {
    fine += 500
}
if (!lic) {
    fine += 500
}
if (!ins) {
    fine += 500
}

console.log(fine);



