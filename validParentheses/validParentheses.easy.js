/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    let char = s.split('');
    let counter = 0;
    console.log(char);
    for (let i = 0; i < char.length; i++) {
           if (char[i] === '('){
              if (char[i+1] === ')'){
                counter++;
              }
           }
          if (char[i] === '{'){
            if (char[i+1] === '}'){
              counter++;
            }
          }
          if (char[i] === '['){
            if (char[i+1] === ']'){
              counter++;
            }
          }
      i++;
    }
    console.log(counter);
    if(counter * 2 == char.length){
      return true;
    } else {
      return false;
    }
}

module.exports = isValid;