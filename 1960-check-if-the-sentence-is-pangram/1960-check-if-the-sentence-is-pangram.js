/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let tracking = {}
    let arr=[]
    for(let i of sentence){
        if(tracking[i]){
            tracking[i]=tracking[i]+1
        }else{
            tracking[i]=1
        }
    }

    for(let i in tracking){
        if(tracking[i]){
            arr.push(i)
        }
    }
    return arr.length == 26 ? true :false
};