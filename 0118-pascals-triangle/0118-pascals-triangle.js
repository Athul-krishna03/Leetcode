/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
   let output=[]
   let pointer=1
   while(pointer<=numRows){
    let temp=[]
    let prevArr = output[pointer-2]
    for(let i=1;i<=pointer;i++){
        if(i==1 || i==pointer){
            temp.push(1)
        }else{
            temp.push((prevArr[i-2]+prevArr[i-1]))
        }
    }
    output.push(temp)
    pointer++
   }
   return output
};