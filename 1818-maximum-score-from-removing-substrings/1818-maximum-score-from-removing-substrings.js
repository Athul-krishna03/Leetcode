/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
  const removePairs = (str, a, b, value) => {
        let stack = [];
        let points = 0;
        for (let ch of str) {
            if (stack.length && stack[stack.length - 1] === a && ch === b) {
                stack.pop();
                points += value;
            } else {
                stack.push(ch);
            }
        }
        return [stack.join(""), points];
    };

    let total = 0;

    if (x > y) {
        [s, gain1] = removePairs(s, 'a', 'b', x);
        [_, gain2] = removePairs(s, 'b', 'a', y);
    } else {
        [s, gain1] = removePairs(s, 'b', 'a', y);
        [_, gain2] = removePairs(s, 'a', 'b', x);
    }

    return gain1 + gain2;
};