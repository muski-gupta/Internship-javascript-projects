
let score = 85;
let grade;

// Using if...else statements
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

// Using switch statement
switch (grade) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "F";
}

// Using ternary operator
let status = score >= 40 ? "Passed" : "Failed";

// Display output
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
