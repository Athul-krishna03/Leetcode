/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let count=0
    let track=[]
    for(let i=0;i<fruits.length;i++ ){
        for(let j=0;j<fruits.length;j++){
            if(fruits[i]<=baskets[j] ){
                baskets.splice(j,1)
                break
            }
        }
    }
    return baskets.length
};