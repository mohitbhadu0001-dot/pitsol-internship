
// Workshop Budget Calculator - Function Refactoring

// Calculate the cost of workshop supplies
function calculateLineCost(quantity, unitCost) {
    if (!Number.isFinite(quantity) || quantity < 0) {
        return "Invalid quantity";
    }

    if (!Number.isFinite(unitCost) || unitCost < 0) {
        return "Invalid unit cost";
    }

    return quantity * unitCost;
}

// Calculate the remaining budget
function remainingBudget(budget, spent) {
    if (!Number.isFinite(budget) || budget < 0) {
        return "Invalid budget";
    }

    if (!Number.isFinite(spent) || spent < 0) {
        return "Invalid spent amount";
    }

    return budget - spent;
}

// Check whether the expense is within budget
function isWithinBudget(budget, spent) {
    const remaining = remainingBudget(budget, spent);

    if (typeof remaining !== "number") {
        return false;
    }

    return remaining >= 0;
}

// Workshop details
const quantity = 12;
const unitCost = 75;
const budget = 2000;

// Calculate supply cost
const supplyCost = calculateLineCost(quantity, unitCost);

// Calculate remaining amount
const remaining = remainingBudget(budget, supplyCost);

// Display results
console.log("Workshop Budget Summary");
console.log("-----------------------");
console.log("Quantity:", quantity);
console.log("Unit Cost: Rs.", unitCost);
console.log("Total Supply Cost: Rs.", supplyCost);
console.log("Remaining Budget: Rs.", remaining);
console.log("Within Budget:", isWithinBudget(budget, supplyCost));
