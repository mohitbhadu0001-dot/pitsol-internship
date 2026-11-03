
// Photography Invoice - Function Refactoring

// Calculate photography session charges
function sessionCharge(hours, hourlyRate) {
    if (!Number.isFinite(hours) || hours < 0) {
        return "Invalid session hours";
    }

    if (!Number.isFinite(hourlyRate) || hourlyRate < 0) {
        return "Invalid hourly rate";
    }

    return hours * hourlyRate;
}

// Calculate optional travel fee
function optionalTravelFee(distanceKm, ratePerKm = 10) {
    if (!Number.isFinite(distanceKm) || distanceKm < 0) {
        return "Invalid travel distance";
    }

    if (!Number.isFinite(ratePerKm) || ratePerKm < 0) {
        return "Invalid travel rate";
    }

    return distanceKm * ratePerKm;
}

// Calculate remaining booking balance
function bookingBalance(total, advancePaid) {
    if (!Number.isFinite(total) || total < 0) {
        return "Invalid total amount";
    }

    if (!Number.isFinite(advancePaid) || advancePaid < 0) {
        return "Invalid advance payment";
    }

    return total - advancePaid;
}

// Calculate complete booking total
function calculateBookingTotal(hours, hourlyRate, distanceKm, ratePerKm = 10) {
    const sessionCost = sessionCharge(hours, hourlyRate);
    const travelCost = optionalTravelFee(distanceKm, ratePerKm);

    if (typeof sessionCost !== "number") {
        return sessionCost;
    }

    if (typeof travelCost !== "number") {
        return travelCost;
    }

    return sessionCost + travelCost;
}

// Booking details
const hours = 4;
const hourlyRate = 1250;
const distanceKm = 20;
const advancePaid = 1500;

// Calculate invoice
const sessionCost = sessionCharge(hours, hourlyRate);
const travelCost = optionalTravelFee(distanceKm);
const total = calculateBookingTotal(hours, hourlyRate, distanceKm);
const balance = bookingBalance(total, advancePaid);

// Display invoice
console.log("Photography Booking Invoice");
console.log("---------------------------");
console.log("Session Hours:", hours);
console.log("Hourly Rate: Rs.", hourlyRate);
console.log("Session Cost: Rs.", sessionCost);
console.log("Travel Fee: Rs.", travelCost);
console.log("Total Amount: Rs.", total);
console.log("Advance Paid: Rs.", advancePaid);
console.log("Remaining Balance: Rs.", balance);
