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
