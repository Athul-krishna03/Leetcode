/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let res=[]
    let prev;
    for(let i=0;i<words.length;i++){
        
       if(res.length==0 || groups[i] != prev){
         res.push(words[i]);
         prev = groups[i];
       }
         
    }
    return res
    
};