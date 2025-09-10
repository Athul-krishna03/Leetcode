/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let right = 0
   let maxProfit = 0
   let cheapest = prices[0]
   while(right <= prices.length){
     if(prices[right]<cheapest){
        cheapest = prices[right]
     }
     maxProfit = (prices[right]-cheapest)>maxProfit?(prices[right]-cheapest):maxProfit
     right++
   }
   return maxProfit
};