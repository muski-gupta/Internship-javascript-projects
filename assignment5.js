
 // 1. Standard Function with Default Parameters
function calculateArea(length = 5, width = 4) {
    return length * width;
}

console.log(
    "Standard Function Area (Default 5x4): " + calculateArea()
);


// 2. Arrow Function with Default Parameters
const rectangleArea = (length = 5, width = 4) => length * width;

console.log(
    "Arrow Function Area (Custom 10x3): " + rectangleArea(10, 3)
);


// 3. Demonstrating Block Scope
{
    let blockVar = 100;
}

// Try to access blockVar outside the block
try {
    console.log(blockVar);
} catch (error) {
    console.log("Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)");
}



function showFunctionScope() {
    var functionVar = 100;
    console.log("Inside Function:", functionVar);
}

showFunctionScope();

try {
    console.log(functionVar);
} catch (error) {
    console.log("Scope Test Error: ReferenceError: functionVar is not defined (when accessed outside function)");
}