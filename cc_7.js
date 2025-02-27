// Task 1: Function Declaration
// Writing a function that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}
// Testing the function 
calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);

// Task 2: Function Expression
// Writing a function expression that calculates hourly wage
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}
// Testing the function
calculateHourlyWage(52000, 40); 
calculateHourlyWage(75000, 35); 

// Task 3: Arrow Function
// Writing an arrow function that applies a discount
const calculateLoyaltyDiscount = (amount, years) => {
    const discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    const discountedPrice = (amount * (1 - discountRate)).toFixed(2);
    return `Discounted Price: $${discountedPrice}`;
};
// Testing the function
console.log(calculateLoyaltyDiscount(100, 6));  
console.log(calculateLoyaltyDiscount(200, 2)); 

// Test 4: Parameters and Arguments
// Writing a function to calculate shipping fees
function calculateShippingCost(weight, location, expedited = false) {
    const rates = {
        USA: {baseCost: 5, costPerLb: 0.5},
        Canada: {baseCost: 10, costPerLb: 0.7}
    };
    const {baseCost, costPerLb} = rates[location];
    let shippingCost = baseCost + (costPerLb * weight);
    if (expedited) {
        shippingCost += 10;
    }
    return `Shipping Cost: $${shippingCost.toFixed(2)}`;
}
// Testing the function
console.log(calculateShippingCost(10, "USA", true));  
console.log(calculateShippingCost(5, "Canada", false)); 

// Task 5: Returning Values
// Writing a function that returns total interest
function calculateLoanInterest(principal, rate, years) {
    let loanInterest = principal * rate * years;
    console.log(`Total Interest: $${loanInterest.toFixed(2)}`);
}
// Testing the function 
calculateLoanInterest(1000, 0.05, 3);
calculateLoanInterest(5000, 0.07, 5); 

// Task 6: Higher-Order Functions
// Writing a higher-order function that filters transactions above $1000
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
// Testing the function 
let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));

// Task 7: Closures
// Writing a function that returns another function to add expenses and keep a running balance
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        console.log(`Current Balance: $${balance}`);
    };
}
// Testing the function 
let budget = createBudgetTracker();
budget(300); 
budget(200); 

// Task 8: Recursion in JavaScript
// Writing a recursive function that projects revenue growth
function calculateGrowth(years, revenue) {
    if (years === 10) {
        console.log(`Projected Revenue: $${revenue.toFixed(2)}`);
        return;
    }
    revenue *= 1.05;
    calculateGrowth(years + 1, revenue);
}
// Testing the function
calculateGrowth(8, 1000); 
calculateGrowth(5, 5000); 
