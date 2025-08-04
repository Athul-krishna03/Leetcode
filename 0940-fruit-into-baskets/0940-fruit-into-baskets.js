/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map= new Map()
    let l = 0
    let maxLength =0
    for(let r=0;r<fruits.length;r++){
        map.set(fruits[r],(map.get(fruits[r])||0)+1)
        while(map.size>2){
            map.set(fruits[l],map.get(fruits[l])-1)
            if(map.get(fruits[l])==0){
                map.delete(fruits[l])
            }
            l++
        }
        maxLength = Math.max(maxLength,r-l+1)

    }
    return maxLength

    
};