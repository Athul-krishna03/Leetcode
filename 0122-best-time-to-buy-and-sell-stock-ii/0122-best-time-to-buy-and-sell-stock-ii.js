/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let j=1
    for(let i=0;i<prices.length;i++){
            if(prices[j]>prices[i]){
                max +=prices[j]-prices[i]
            }
        j++
    }
    return max
};