
 // 1. Create an array of product objects
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

// 2. Use forEach() to print all products
console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

// 3. Use filter() to find products under $50
console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter(function(product) {
    return product.price < 50;
});

console.log(filteredProducts);

// 4. Use map() to create formatted product tags
console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(function(product) {
    return `${product.name.toUpperCase()} costs $${product.price}`;
});

console.log(productTags);
