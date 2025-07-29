/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let val =nums.filter((v)=>nums.indexOf(v)==nums.lastIndexOf(v))
    return val[0]
    
};