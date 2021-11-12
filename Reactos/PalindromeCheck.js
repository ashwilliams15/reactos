// Given a string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive.

// BRUTE FORCE APPROACH
// Loop over string backwards and create new backwards string
// Compare backwards string with original string

// Time Complexity: O(n)
// Space Complexity: O(1)?
function palindrome(str) {
  let lowered = str.toLowerCase();

  let backStr = "";

  for (let i = lowered.length - 1; i >= 0; i--) {
    backStr += lowered[i];
  }

  if (backStr === lowered) {
    return true;
  } else {
    return false;
  }
}

// ITERATIVE OPTIMIZED
// Need to have a way to return earlier
// Compare each letter as we go and return false if at any time they don't match

// Time Complexity: O(n)
// Space Complexity: O(1)
function palindrome(str) {
  while (str.length) {
    let first = str[0].toLowerCase();
    let last = str[str.length - 1].toLowerCase();

    if (first === last) {
      str = str.slice(1, str.length - 1);
    } else {
      return false;
    }
  }
  return true;
}

// RECURSIVE APPROACH

// Time Complexity: O(n)
// Space Complexity: O(n) (multiple calls on callstack)
function palindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
    return false;
  } else {
    return palindrome(str.slice(1, str.length - 1));
  }
}

palindrome("racecar");
