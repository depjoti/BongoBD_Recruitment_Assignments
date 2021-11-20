# BongoBD's Frontend Developer Position Assigment 
## Problem 
Write a function that detects if two strings are anagram e.g. ‘bleat’ and ‘table’ are
anagrams but ‘eat’ and ‘tar’ are not

#### Task
    -Write a function for checking two string are anagram.
    -Write Unit test of anagram function.

#### Write a function for checking two string are anagram.
~~~javascript
function isAnagram(str1,str2){
    let sorted1 = str1.split('').sort().join('').toLowerCase();
    let sorted2 = str2.split('').sort().join('').toLowerCase();
    return(sorted1===sorted2);
}
// console.log(isAnagram('table','bleat'));
// console.log(isAnagram('eat','tar'));w

module.exports=isAnagram
~~~~



#### Write Unit test of anagram function.
~~~javascript

const isAnagram=require('./anagram');

test('table and bleat',()=>{
    expect(isAnagram("table","bleat")).toBe(true);
});

test('eat and tar',()=>{
    expect(isAnagram("eat","tar")).toBe(false);
});
~~~