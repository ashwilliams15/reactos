// Return the first index of the first appearance of one string (the needle) inside of another string (the haystack).

// Input, needle and haystack
// Output first index of first appearance

// EXAMPLES
// ('or', 'hello world'); // should return 7
// ('hello world', 'or'); // should return -1

// close but returns incorrect index (the last, not the first)
function search(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let newHaystack = haystack.slice(haystack[i]);
      let idx = i;
      while (needle.length) {
        if (needle[0] === newHaystack[0]) {
          needle = needle.slice(1);
          newHaystack = newHaystack.slice(1);
          idx++;
        } else {
          break;
        }
      }
      return idx;
    }
  }
  return -1;
}

search("or", "hello world");
// find first instance of first letter match
// save index
// continue to loop if found comparing letter to letter
// stop once you've reached the length of the haystack
// return index

// SECOND ATTEMPT
// close but returns incorrect index (the last, not the first)
function search(needle, haystack) {
  let idx = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      idx = i;
      for (let j = 1; j < needle.length; j++) {
        if (j === needle.length) {
          return idx;
        }
        if (haystack[j + i] === needle[j]) {
          continue;
        } else {
          break;
        }
      }
    }
  }
  return idx;
}

// SOLUTION

// Time Complexity: O(n * m) where n is length of needle and m is length of haystack
// Space Complexity: O(1)
function indexOf(needle, haystack) {
  // subtracting the needle length is an optimization
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      // if at any time we don't have a match, break out of inner loop
      // i + j is used to keep moving index forward in haystack
      if (haystack[i + j] !== needle[j]) break;
      // if we've reached the length of the needle string
      if (j + 1 === needle.length) return i;
    }
  }
  return -1;
}
