// /**
//  * @param {string} s
//  * @return {number}
//  * 
//  * @description Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//  */

const romanToInt = function (s) {
    let sSplit = s.split("");
    let sum = 0;

    for (let i = 0; i < sSplit.length; i++) {
       let letter = null;
       if (sSplit[i] === 'I' && sSplit[i+1] === 'V'){letter = 'IV';i++}
       if (sSplit[i] === 'I' && sSplit[i+1] === 'X'){letter = 'IX';i++}
       if (sSplit[i] === 'X' && sSplit[i+1] === 'L'){letter = 'XL'; i++}
       if (sSplit[i] === 'X' && sSplit[i+1] === 'C'){letter = 'XC'; i++}
       if (sSplit[i] === 'C' && sSplit[i+1] === 'D'){letter = 'CD'; i++}
       if (sSplit[i] === 'C' && sSplit[i+1] === 'M'){letter = 'CM'; i++}
       if (letter === null) {letter = sSplit[i];}
     switch (letter) {
        case 'IV':
            sum += 4;
            break;
        case 'IX':
            sum += 9;
            break;
        case 'XL':
            sum += 40;
            break;
        case 'XC':
            sum += 90;
            break;
        case 'CD':
            sum += 400;
            break;
        case 'CM':
            sum += 900;
            break;
          case 'I':
            sum += 1;
            break;
          case 'V':
            sum += 5;
            break;
          case 'X':
            sum += 10;
            break;
          case 'L':
            sum += 50;
            break;
          case 'C':
            sum += 100;
            break;
          case 'D':
            sum += 500;
            break;
          case 'M':
            sum += 1000;
            break;
        }
    }
    return sum;
};
module.exports =  romanToInt;