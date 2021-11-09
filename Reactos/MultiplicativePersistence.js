// Given a non-negative integer, write a function that returns its multiplicative persistence--the number of times you must multiply the digits in a number together until you reach a single digit product.

// RECURSIVE APPROACH
// Keep track of how many times function runs

function persist(num) {
  //Convert num to string and loop over string
  const stringNum = num.toString();
  //base case
  if (String(num).length === 1) {
    return 0
  }
  //multiply them together
  let sum = 1;
  for (let i = 0; i < stringNum.length; i++) {
    sum *= Number(stringNum[i])
  }
  //call persist again with 1 + persist(newnum)
  return 1 + persist(sum)
}

// ITERATIVE APPROACH
// Keep track of how many times the multiplication happens

function persist(num) {
  let result = 0;
  let stringNum = String(num);

  while (stringNum.length > 1) {
    //loop tracker
    result++
    //JS will coerce these strings into numbers when attempting to multiply them
    let product = stringNum.split("").reduce((total, current) => total * current);
    //reset stringNum to new product
    stringNum = String(product)
  }
  return result
}

persist(39)
