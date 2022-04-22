// /**
//  * @param {string[]} strs
//  * @return {string}
//  *
//  * @description {Write a function to find the longest common prefix string amongst an array of strings.
//                 If there is no common prefix, return an empty string "".}
//  * 
// *  Example 1 
//  * Input: strs = ["flower","flow","flight"]
//  * Output: "fl"
//  * 
//  *
//  * Example 21
//  * Input: strs = ["dog","racecar","car"]
//  * Output: ""
//  *
//  */

const longestCommonPrefix = function (strs) {
    let firstWordOfString = strs[0].split('');
    let similarLetter = 0;
    let similarLetter2 = 0;
    let preFix = 0;
    let combain = [];
    let firstLettersAreEqual = true;
    for (let i = 1; i < strs.length; i++) {
         similarLetter = 0;
         for (let j = 0; j < strs[i].length; j++) {
            for (let g = 0; g < firstWordOfString.length; g++) {
                    if (firstWordOfString[g] === strs[i][j]){
                               similarLetter++;
                    } 
                    if ((firstWordOfString[0] !== strs[1][0])){
                           firstLettersAreEqual = false;
                    }    
            }
         }    
         similarLetter2 = similarLetter;
         if (similarLetter > 0){
             preFix++;
         }
    }
    if (firstLettersAreEqual  === false){
        return '';
    }
    for (let m = 0; m < similarLetter2; m++) {
          combain.push(firstWordOfString[m]);
    }
    return combain.join('');
};

module.exports = longestCommonPrefix;
