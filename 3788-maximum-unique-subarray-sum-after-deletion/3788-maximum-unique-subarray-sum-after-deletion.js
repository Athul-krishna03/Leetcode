/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    let result = []
    if(Math.max(...nums)< 0){return Math.max(...nums)}
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0 && !result.includes(nums[i])){
            result.push(nums[i])
        }
    }
    console.log(result)
    return result.reduce((acc,curr)=>acc+curr,0)

};