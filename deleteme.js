//Given a non-negative integer, write a function that returns its multiplicative persistence--the number of times you must multiply the digits in a number together until you reach a single digit product.

//Ex: 39 returns 3

// 3 x 9 = 27
// 2 x 7 = 14
// 1 x 4 = 4

function persist(num) {
  if (String(num).length === 1) {
    return 0;
  }
  let stringed = String(num);
  let product = 1;
  for (let i = 0; i < stringed.length; i++) {
    product *= Number(stringed[i]);
  }
  return 1 + persist(product);
}
