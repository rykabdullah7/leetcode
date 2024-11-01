/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let b = 0;
    while (x !== 0) {
        b = (x % 10) + b * 10;
        x = (x - (x % 10)) / 10;
    }
    
    // Check if the result is within the 32-bit range
    if (b <= Math.pow(2, 31) - 1 && b >= -Math.pow(2, 31)) {
        return b;
    } else {
        return 0;
    }

};
