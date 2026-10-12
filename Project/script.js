
 // 1. Initial product data
let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");


// 2. Function to find a product using a loop
function findProduct(productName) {
    for (let i = 0; i < products.length; i++) {
        if (!products[i].name || products[i].price <= 0) {
            continue; // Skip invalid products
        }

        if (products[i].name.toLowerCase() === productName.toLowerCase()) {
            return products[i]; // Product found
        }
    }

    return null;
}


// 3. Function to assign a category
function getCategory(price) {
    let category;

    if (price < 50) {
        category = "Budget";
    } else if (price <= 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    // switch to assign the category badge
    switch (category) {
        case "Budget":
            return { name: category, className: "budget" };

        case "Standard":
            return { name: category, className: "standard" };

        case "Premium":
            return { name: category, className: "premium" };

        default:
            return { name: "Unknown", className: "" };
    }
}


// 4. Standard function to calculate total inventory value
function calculateTotal() {
    let total = 0;

    products.forEach(function(product) {
        total += product.price;
    });

    return total;
}


// 5. Arrow function for tax and discount calculations
const calculateFinalPrice = (price, taxRate = 0, discount = 0) => {
    const discountedPrice = price * (1 - discount / 100);
    const finalPrice = discountedPrice * (1 + taxRate / 100);

    return finalPrice;
};


// 6. Function to update the dashboard
function updateDashboard() {
    const productList = document.getElementById("productList");
    const affordableProducts = document.getElementById("affordableProducts");
    const reportList = document.getElementById("reportList");

    productList.innerHTML = "";
    
    // forEach(): display all products
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    products.forEach(function(product) {
        const category = getCategory(product.price);

        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${category.name}`
        );

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td><span class="badge ${category.className}">${category.name}</span></td>
        `;

        productList.appendChild(row);
    });

    // Calculate total inventory value
    const total = calculateTotal();
    document.getElementById("totalValue").textContent =
        "$" + total.toFixed(2);

    // filter(): find products under $200
    const affordable = products.filter(function(product) {
        return product.price < 200;
    });

    const affordableNames = affordable.map(function(product) {
        return product.name;
    });

    affordableProducts.textContent = JSON.stringify(affordableNames);

    // map(): create formatted report
    const report = products.map(function(product) {
        return `${product.name.toUpperCase()}: $${product.price}`;
    });

    reportList.innerHTML = "";

    report.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        reportList.appendChild(li);
    });

    // Financial analytics in console
    console.log("\n--- Financial Analytics ---");
    console.log("Total Inventory Value: $" + total);
    console.log("Filtered Affordable Items:", JSON.stringify(affordableNames));
    console.log("Formatted Report List:", JSON.stringify(report));

    // Example: 10% tax and 5% discount on a $100 product
    console.log(
        "Example Final Price ($100, 10% tax, 5% discount): $" +
        calculateFinalPrice(100, 10, 5).toFixed(2)
    );
}


// 7. Add product using the HTML form
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("productName");
    const priceInput = document.getElementById("productPrice");
    const message = document.getElementById("message");

    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    // Validate input using if...else
    if (name === "" || priceInput.value.trim() === "" ||
        !Number.isFinite(price) || price <= 0) {
        message.textContent = "Please enter a valid name and positive price.";
        return;
    } else if (findProduct(name) !== null) {
        message.textContent = "This product already exists.";
        return;
    } else {
        products.push({ name: name, price: price });
        message.textContent = "Product added successfully!";
    }

    nameInput.value = "";
    priceInput.value = "";

    updateDashboard();
});


// 8. Add product using prompt(), as required by the assignment
document.getElementById("promptAddButton").addEventListener("click", function() {
    const nameInput = prompt("Enter product name:");

    if (nameInput === null) {
        return; // User cancelled
    }

    const name = nameInput.trim();

    if (name === "") {
        alert("Product name cannot be empty.");
        return;
    }

    const priceInput = prompt("Enter product price:");

    if (priceInput === null) {
        return;
    }

    const price = Number(priceInput);

    if (priceInput.trim() === "" || !Number.isFinite(price) || price <= 0) {
        alert("Please enter a valid positive price.");
        return;
    }

    if (findProduct(name) !== null) {
        alert("This product already exists.");
        return;
    }

    products.push({ name: name, price: price });

    console.log(`[Prompt executed: User adds "${name}" at "$${price}"]`);

    updateDashboard();
});


// Show initial inventory
updateDashboard();
