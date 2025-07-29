/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = s.split(" ").filter((v)=>v != "")
    return res[res.length-1].length
    
};