
// Day 8 - GCD and LCM

// Calculate Greatest Common Divisor
function gcd(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return null;
    }

    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0 && b === 0) {
        return null;
    }

    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

// Calculate Least Common Multiple
function lcm(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return null;
    }

    if (a === 0 || b === 0) {
        return 0;
    }

    let greatest = gcd(a, b);

    return Math.abs((a / greatest) * b);
}

// Check whether two numbers are coprime
function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

// Calculate GCD of three numbers
function gcdThree(a, b, c) {
    if (!Number.isInteger(c)) {
        return null;
    }

    let firstGcd = gcd(a, b);

    if (firstGcd === null) {
        return null;
    }

    return gcd(firstGcd, c);
}

// Display results
console.log("GCD and LCM Calculator");
console.log("----------------------");

console.log("GCD (84, 30):", gcd(84, 30));
console.log("GCD (12, 18):", gcd(12, 18));

console.log("LCM (12, 18):", lcm(12, 18));
console.log("LCM (9, 6):", lcm(9, 6));

console.log("GCD (0, 15):", gcd(0, 15));
console.log("GCD (-12, 18):", gcd(-12, 18));
console.log("GCD (0, 0):", gcd(0, 0));

console.log("Are 8 and 15 coprime?", areCoprime(8, 15));
console.log("Are 6 and 15 coprime?", areCoprime(6, 15));

console.log("GCD (12, 18, 24):", gcdThree(12, 18, 24));
