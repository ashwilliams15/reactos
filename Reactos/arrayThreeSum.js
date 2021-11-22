// Given an array of distinct integers and an integer representing a target sum, write a function taht returns an array of all triplets in the input array that sum to the target sum

// APPROACH
// create a memo whose keys are the sum of each pair of numbers in the array and value is the difference between the target and the key.
// Loop through array one more time and search lookup for each number
// Store triplets in array

// Doesn't work. Compares numbers to itself and returns all iterations of triplets
function arrayThreeSum(arr, target) {
  let lookup = {};
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    let elem1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let elem2 = arr[j];
      let twoSum = elem1 + elem2;
      if (twoSum < target) {
        let difference = target - twoSum;
        lookup[difference] = [elem1, elem2];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (lookup[arr[i]]) {
      triplets.push([arr[i]].concat(lookup[arr[i]]));
    }
  }
  return triplets;
}

// MEMO SOLUTION
function arrayThreeSum(arr, target) {
  const triplets = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let currentSum = target - arr[i];
    let memo = {};
    for (let j = i + 1; j < arr.length; j++) {
      if (memo[currentSum] - arr[j]) {
        triplets.push([arr[i], currentSum - arr[j], arr[j]]);
      } else {
        memo[arr[j] === true];
      }
    }
  }
  return triplets;
}

// My sorting with pointers approach
// Close, but is actually an infinite loop?
function arrayThreeSum(arr, target) {
  let triplets = [];
  arr = arr.sort((a, b) => a - b);
  let p1 = 0; //
  let p2 = arr.length - 1; //
  while (p1 < p2) {
    // 0 < 6
    let twoSum = arr[p1] + arr[p2]; // 10
    for (let i = p1 + 1; i < p2; i++) {
      // i = 1
      let sum = twoSum + arr[i]; // sum = 10+-3=7
      if (sum === target) {
        triplets.push([arr[i], arr[p1], arr[p2]]);
        p1++;
        p2--;
      } else if (sum > target) {
        p2--;
      } else {
        p1++;
      }
    }
  }
  return triplets;
}

// SOLUTION CODE
function arrayThreeSum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    // i = 0, 1
    let elem = arr[i]; // -5, -3
    let leftIdx = i + 1; // -3, 1, 2, 6, 1
    let rightIdx = arr.length - 1; // 15, 6, 15

    while (leftIdx < rightIdx) {
      // 1 < 6, 2 < 6, 3 < 6, 4 < 6 4 < 5
      let sum = elem + arr[leftIdx] + arr[rightIdx]; // sum = 7, 9, 10, 19, 13
      if (sum === target) {
        triplets.push([elem, arr[leftIdx], arr[rightIdx]]);
        leftIdx++;
        rightIdx--;
      } else if (sum > target) {
        rightIdx--;
      } else {
        leftIdx++;
      }
    }
  }
}
[-5, -3, 1, 2, 6, 12, 15];
arrayThreeSum([1, 15, -5, 12, -3, 6, 2], 10);
