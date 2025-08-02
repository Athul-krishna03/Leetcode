/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    let freq = new Map()
    let excess=[]
    let vals = new Set([...basket1,...basket2])
    for(let i of basket1){
        freq.set(i,(freq.get(i)||0)+1)
    }
    for(let i of basket2){
        freq.set(i,(freq.get(i)||0)-1)
    }
    for(let num of vals){
        if(freq.get(num)%2 != 0){
            return -1
        }
        let needed = Math.abs(freq.get(num))/2
        for(let i=0;i<needed;i++){
            excess.push(num)
        }
    }
    excess.sort((a,b)=>a-b);
    const minVal=Math.min(...basket1,...basket2);
    let cost=0
    for(let i=0;i<excess.length/2;i++){
        cost += Math.min(excess[i],2*minVal)
    }
    return cost
    

};