// Task 1: Function Declaration
// Writing a function that calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    const total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);
}
// Testing the function 
calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);
