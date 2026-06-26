```js

words = ["eat", "tea", "tan", "ate", "nat", "bat"]


function groupAnagrams(words) {
  map = {}
  for (let w of words){
    let sortedWords = w.sort();
    if(map[sortedWords] === undefined){
        map[sortedWords] = [w]
    } else {
        map[sortedWords] = [...map[sortedWords], w]
    }
  }
  return map
}

```