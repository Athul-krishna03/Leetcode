/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicates = new Set()
    for(let i of nums){
        if(duplicates.has(i)){
            return true
        }else{
            duplicates.add(i)
        }
    }
    return false
};