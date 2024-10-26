/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "M") {
            if (s[i - 1] === "C") {
                num += 0;
            }
            else {
                num += 1000;
            }

        }
        else if (s[i] === "D") {
            if (s[i - 1] === "C") {
                num += 0;
            }
            else {
                num += 500;
            }

        }
        else if (s[i] === "C") {
            if (s[i - 1] === "X") {
                num += 0;
            }
            else {
            if (s[i + 1] === "M") {
                num += 900;
            }
            else if (s[i + 1] === "D") {
                num += 400;
            }
            else {
                num += 100;
            }
            }
        }
        else if (s[i] === "L") {
            if (s[i - 1] === "X") {
                num += 0;
            }
            else {
            num += 50;
            }
        }
        else if (s[i] === "X") {
            if (s[i - 1] === "I") {
                num += 0;
            }
            else {
            if (s[i + 1] === "L") {
                num += 40;
            }
            else if (s[i + 1] === "C") {
                num += 90;
            }
            else {
                num += 10;
            }
            }
            
        }
        else if (s[i] === "V") {
            if (s[i - 1] === "I") {
                num += 0;
            }
            else {
            num += 5;
            }
        }
        else if (s[i] === "I") {
             if (s[i + 1] === "V") {
                num += 4;
            }
            else if (s[i + 1] === "X") {
                num += 9;
            }
            else {
                num += 1;
            }
        }
    }
    return num;
};
