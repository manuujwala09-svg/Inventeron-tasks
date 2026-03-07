// for loop
function forLoop() {
    console.log("for loop (1 to 5):");
    for (let i = 1; i <= 5; i++) {
        console.log("i = " + i);
    }
}

// while loop
function whileLoop() {
    console.log("while loop (1 to 5):");
    let i = 1;
    while (i <= 5) {
        console.log("i = " + i);
        i++;
    }
}

// do...while loop
function doWhileLoop() {
    console.log("do...while loop (1 to 5):");
    let i = 1;
    do {
        console.log("i = " + i);
        i++;
    } while (i <= 5);
}

// for...in loop (for objects)
function forInLoop() {
    console.log("for...in loop (object keys):");
    let person = {
        name: "Likith",
        age: 21,
        city: "Bangalore"
    };
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
}

// for...of loop (for arrays)
function forOfLoop() {
    console.log("for...of loop (array values):");
    let fruits = ["Apple", "Banana", "Orange"];
    for (let fruit of fruits) {
        console.log(fruit);
    }
}

// break statement
function breakExample() {
    console.log("break statement (stop at 3):");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            console.log("Breaking at i = 3");
            break;
        }
        console.log("i = " + i);
    }
}

// continue statement
function continueExample() {
    console.log("continue statement (skip 3):");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            console.log("(skipped 3)");
            continue;
        }
        console.log("i = " + i);
    }
}
