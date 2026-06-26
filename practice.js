// Leet code problem 2
// words = ["eat", "tea", "tan", "ate", "nat", "bat"]


// function groupAnagrams(words) {
//  const map = {}
//   for (let w of words){
//     let sortedWords = w.split("").sort().join("");
//     if(map[sortedWords] === undefined){
//         map[sortedWords] = [w]
//     } else {
//         map[sortedWords] = [...map[sortedWords], w]
//     }
//   }
//   return Object.values(map);
// }

// console.log(groupAnagrams(words))

/**
Leet code problem 3
Problem 3 — Longest Consecutive Sequence (LeetCode #128)

Given an unsorted array of integers, find the length of the longest consecutive sequence.
Input: [100, 4, 200, 1, 3, 2]

Output: 4
Because 1, 2, 3, 4 is the longest consecutive sequence!

Constraint: Must solve in O(N) time — so no sorting allowed!

Step 1 — Clarification:
Answer these before strategy:

What is input and output type?
What if array is empty?
What if array has duplicate numbers like [1, 1, 2, 3] — does 1 count twice?
What if no consecutive sequence exists at all, like [5, 100, 300]?

*/

// first i will sort the Array, 
const nm = [100, 4, 200, 1, 3, 2];

// function longestConsecutiveNumbers(nm){
//     if(nm.length === 0){
//         return 0;
//     }
//     if(nm.length === 1){
//         return nm[0];
//     }
//     const map = {};
    
//     for (i = 0; i < nm.length; i++){
//         if(map[nm[i]] === undefined) {
//             map[nm[i]] = i;
//         }
//     }
//     const flatarr = Object.keys(map);
//     // console.log(flatarr)
//     const ln = flatarr.length
//     let lastNumber = 0;
//     for (i = 0; i < ln -1; i++){
//         const first = flatarr[i];
//         // console.log(flatarr[i+1] , "=", parseInt(first)+1)
//         if(flatarr[i+1] !== (parseInt(first) + 1)){
//             lastNumber = flatarr[i-1];
//         }
//     }
//     return lastNumber;
// }

function longestConsecutiveNumbers(nm){
    const map = {};
    for (let n of nm){
        if(map[n] === undefined){ map[n] = true; }
        
    }

    let longest = 0;
    for (let n of nm){
        if(map[n-1] === undefined){
            let length = 1;
            let current = n;
            while(map[current + 1]){
                current++;
                length++
            }
            longest = Math.max(longest, length)
        }
    }
    return longest;
}

// console.log(longestConsecutiveNumbers(nm))
// check if Array.length is gt than 1;
// check if arr has duplicate value, loop and remove it.
// sort the array by numbers
// console.log((nm).sort())


/**
 * Exercise 1 — Easy

Given an array, return a new array with all duplicates removed.
[1, 3, 3, 5, 1, 7] → [1, 3, 5, 7]

How would you solve this using a Set? Think out loud — pseudocode first! 🙌
 */

// const set = new Set([1, 3, 3, 5, 1, 7]);
// console.log(set)

/**
 * 🟡 Exercise 2 — Medium

Given two arrays, find all elements that exist in either array but not in both.
[1, 2, 3, 4] and [3, 4, 5, 6] → [1, 2, 5, 6]
This is called a Symmetric Difference

Think about it this way:

1, 2 exist in arr1 but NOT arr2
5, 6 exist in arr2 but NOT arr1
3, 4 exist in BOTH → excluded!

How would you approach this using Sets? Pseudocode first! 🙌
 * 
 */


// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6]; 
// const result = new Set();

// const set2 = new Set([...arr2])
// const set1 = new Set([...arr1])
// for (let a of arr1){
//     if(!set2.has(a)){ result.add(a)}
// }
// for (let a of arr2){
//     if(!set1.has(a)){ result.add(a)}
// }

// console.log([...result])

/**
 * 🟠 Exercise 3 — Slightly Harder

Given a string, find the first non-repeating character.
"aabbcdd" → "c"

"aabb" → null (all repeat)

Hint to think about: You'll need TWO passes through the string. What data structure tracks characters you've seen more than once? 🤔
Pseudocode first! 🙌
 */

// 1. i will split the str .slipt(), which eventually create an array of string
// 2. then i will create a set()
// 3. i will loop with array and check if current value and next value are not same, if not, then return next char

function checkNoRepeat(str){
    const strArr = str.split("");
    const repeat = new Set();
    const seen = new Set();

    for (let a of strArr){
        if(!seen.has(a)) { seen.add(a)} else { repeat.add(a)}
    }
    for (let a of strArr){
        if(!repeat.has(a)) return a;    
    }
    return seen
}

const check = 'aabbcdd';
// console.log(checkNoRepeat(check))


/**
 * Phase 4: LeetCode-Style Problems

🔴 Problem 1 — Contains Duplicate (LeetCode #217)

Given an array, return true if any value appears at least twice, false if all elements are distinct.
[1, 2, 3, 1] → true

[1, 2, 3, 4] → false

Step 1 — Clarification first:

What are inputs and outputs?
What if array is empty?
What if array has only one element?

Think like an interviewer is watching! 🎯
 */

function anyRepeatExists(arr){
    const seen = new Set();
    let result = false;
    for (let a of arr){
        if(!seen.has(a)){ seen.add(a)} else { result = true;}
    }
    return result;
}

/**
 * Problem 2 — Happy Number (LeetCode #202)

A happy number is defined by this process:

Take a number, replace it with the sum of squares of its digits
Repeat until you either reach 1 (happy! ✅) or get stuck in a cycle (not happy ❌)

Example with n = 19:
1² + 9² = 1 + 81 = 82
8² + 2² = 64 + 4 = 68
6² + 8² = 36 + 64 = 100
1² + 0² + 0² = 1 ✅  → Happy!
Input: 19 → Output: true

Step 1 — Clarification:

What is input and output type?
How do you know when you're stuck in a cycle?
What role can a Set play here? 🤔

Think carefully — the cycle detection part is the key insight! 🎯
 */


/**
 * 🎯 Brilliant! That's the exact insight!
If a number appears twice in our process → we're in a cycle → return false
If we reach 1 → return true
The Set is the cycle detector! 🔥
 */

/**
```Paintext
seen = {}

19  → 1²+9² = 82   → 19 in seen? ❌ → add 19  → seen={19}
82  → 8²+2² = 68   → 82 in seen? ❌ → add 82  → seen={19,82}
68  → 6²+8² = 100  → 68 in seen? ❌ → add 68  → seen={19,82,68}
100 → 1²+0²+0² = 1 → 100 in seen? ❌ → add 100
1   → return true ✅
```

 */

// sumOfSquares(19) → 82
// sumOfSquares(82) → 68
function sumOfSquares(n) {
    if(n < 0) return;
    if(n === 1) return 1;
    const strNmArr = (n).toString().split("")
    let sum = 0;
    for (let a of strNmArr){
        sum += parseInt(a)*parseInt(a);
    }    
    return sum;
}

function calc(n){
    while(n % 10 === n || n % 10 ===NaN ){
        
    }
}

function sumOfSquares(n) {
    if(n < 0) return;
    if(n === 1) return 1;

    const strNmArr = (n).toString().split("")
    let sum = 0;
    for (let a of strNmArr){
        sum += parseInt(a)*parseInt(a);
    }    
    return sum;
}

sumOfSquares(19)