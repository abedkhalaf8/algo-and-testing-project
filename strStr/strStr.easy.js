/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
// }
 

// Example 1:

// Input : haystack = "hello", needle = "ll"
// Output : 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
//  */

const strStr = function (haystack, needle) {
  let needleSplit = needle.split('');
  let haystackSplit = haystack.split(''); 
  let counter = 0;
  let firstOccurrence = 0;
  let stop = 1;
  for (let i = 0; i < needleSplit.length; i++) {
    for (let j = 0; j < haystackSplit.length; j++) {
       if (needleSplit[j] === haystackSplit[i]){
         counter++;
         if ( stop > 0 ) {
         firstOccurrence = i;
         stop = 0;;
       }   
      }
  }
}
    if (counter === needleSplit.length){
         return i;
      } else {
          return -1;
        }
}

module.exports = strStr;