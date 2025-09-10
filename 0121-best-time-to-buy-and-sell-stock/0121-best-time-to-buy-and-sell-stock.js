/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let right = 0
   let maxProfit = 0
   let cheapest = prices[0]
   while(right <= prices.length){
    let val = prices[right]
     if(val < cheapest){
        cheapest = prices[right]
     }
     maxProfit = (val-cheapest)>maxProfit?(val-cheapest):maxProfit
     right++
   }
   return maxProfit
};