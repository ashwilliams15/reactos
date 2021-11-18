// Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

function pairSum(arr, target) {
  let p1 = arr[0];
  let p2 = arr[arr.length - 1];

  while (p1 < p2) {
    let sum = arr[p1] + arr[p2]
    if (sum === target) {
      console.log(true)
      return
    } else if (sum < target) {
      p1++
    } else {
      p2--
    }
  }
  console.log(false)
}

pairSum([1, 4, 7, 9], 4)
