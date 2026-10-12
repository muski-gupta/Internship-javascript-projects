// Assignment 2: Operators, Expressions, and Input Handling
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your bill amount: ", (billInput) => {
    rl.question("Enter tip percentage: ", (tipInput) => {

        // Explicit type conversion
        let billAmount = Number(billInput);
        let tipPercentage = Number(tipInput);

        // Calculate tip
        let tip = billAmount * tipPercentage / 100;

        // Calculate total using assignment operator
        let totalAmount = billAmount;
        totalAmount += tip;

        // Display output
        console.log(`Subtotal: $${billAmount}`);
        console.log(`Tip Percentage: ${tipPercentage}%`);
        console.log(`Calculated Tip: $${tip}`);
        console.log(`Total Amount to Pay: $${totalAmount}`);

        rl.close();
    });
});

