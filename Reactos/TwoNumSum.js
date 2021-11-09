// Given an array of numbers and a target number (a "sum"), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// BRUTE FORCE APPROACH
// Nested for loop
// 1st loop grabs one number in arr
// 2nd loop compares all other numbers in arr to number grabbed from first loop
// Return true immediately after finding a pair that adds up to target
// Return false after comparing all numbers

// Time complexity: O(n2)
// Space complexity: O(1)
function twoNumSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === target) {
        return true
      }
    }
  }
  return false
}

// POINTERS APPROACH
// Sort array
// Create left pointer for the first num in array
// Create right pointer for last num in array
// While left pointer < right pointer
// Add and compare. If a match, return true
// If sum is less than target, move left pointer ++
// If sum is greater than target, move right pointer --
// Return false

// Time complexity: O(n * log(n))
// Space complexity: O(1)

function twoNumSum(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return true
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }
  return false
}

// MEMO APPROACH
// Create memo
// Store the complement of each element in array
// Check memo for complement to return true

// Time complexity: O(n)
// Space complexity: O(n)

function twoNumSum(arr, target) {
  let memo = {}

  for (let i = 0; i < arr.length; i++) {
    if (memo[target - arr[i]]) {
      return true
    } else {
      memo[arr[i]] = true
    }
  }
  return false
}

twoNumSum([1, 4, 7, 2], 6)
