// Given an array for with the nth element is the price of a given stock on day n,design an algorithm to find the maximum profit.
// You are only permitted to complete at most one transaction (buy one and sell one share)
// You cannot sell a stock before you buy one

// EXAMPLES
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
// Input: [7, 6, 5, 4, 3, 1]
// Output: 0

// Input is an array, output is an intenger representing the max profit

// BRUTE FORCE APPROACH
// Nested for loop comparing each element to those that follow
// Variable to store current max profit

// Time Complexity: O(n2)
// Space Complexity: O(1)

function Stock(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const profit = arr[j] - arr[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

Stock([7, 1, 5, 3, 6, 4]);

// WHITEBOARD
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// maxProfit = 5
// i = 1 j = 5
// 1st = 1 2nd = 4
// profit = 3

// OPTIMIZED APPROACH
// Only one loop
// Keep track of minimum price, if we come across a lower price point, swap out minimum and compare remaining elements with that new minimum

// Time Complexity: O(n)
// Space Complexity: O(1)

function Stock(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    let profit = arr[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}
