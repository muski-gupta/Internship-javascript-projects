
// Assignment 4: Loop Control Structures

// 1. For loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}



// 2. While loop with break
let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log(`Found: ${num}`);
        break;
    }
    num++;
}

// 3. Do...while loop with continue

let i = 0;
do {
    i++;

    if (i === 3) {
        continue; // Skip number 3
    }

    console.log(i);

} while (i < 5);
