/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
     let result = "";
    let count = 1; // start from 1 because we consider the first char by default

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        // always add char unless it's the 3rd or more consecutive repeat
        if (count < 3) {
            result += s[i];
        }
    }

    // add the first character (we skipped it in loop)
    return s.length > 0 ? s[0] + result : "";
};