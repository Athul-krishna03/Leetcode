/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    arr.sort((a,b)=>a-b)
    const obj={}
    for(let i of arr){
        obj[i]=(obj[i] || 0)+1
    }
    console.log(obj)
    let luck=0
    for(let i in obj){
       if(obj[i]==Number(i) && Number(i)>luck){
          luck=Number(i)
       }
    }
    return luck !=0?luck:-1
    

};