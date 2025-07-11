/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength=0
    let r=0
    let l=0
    let obj={}
    while(r < s.length){
        if(obj[s[r]] == undefined || obj[s[r]]< l){
            maxLength = Math.max(maxLength,(r-l)+1)
            obj[s[r]]=r
            r++
        }else{
            l=obj[s[r]]+1
            obj[s[r]]=r
            maxLength = Math.max(maxLength,(r-l)+1)
            r++
        }
    }
    return maxLength
};