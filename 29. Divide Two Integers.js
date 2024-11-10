/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const INT_MIN = -Math.pow(2, 31); // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647

    // Check if dividend is within the 32-bit signed integer range
    if ((dividend >= INT_MIN && dividend <= INT_MAX)  && (divisor >= INT_MIN && divisor <= INT_MAX)) {
    

    let count = 0;
    let val = 0;
    let sign = 1;

    if (divisor === 1) {
        return dividend;
    }

    if (divisor === -1) {
        // Handle overflow case specifically for 32-bit integer range
        if (dividend === INT_MIN) {
            return INT_MAX; // Clamp to INT_MAX if overflow occurs
        }
        return -dividend;
    }

    if (divisor < 0 && dividend > 0) {
        divisor = -divisor;
        sign = -sign;
    } else if (dividend < 0 && divisor > 0) {
        dividend = -dividend;
        sign = -sign;
    } else if (dividend < 0 && divisor < 0) {
        dividend = -dividend;
        divisor = -divisor;
    }

    while (val + divisor <= dividend) {
        val += divisor;
        count += 1;
    }

    return sign === -1 ? -count : count;
    }
};
