// Problem - Given an integer "n", find the factorial of that integer

function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));

// Big-O time complexity=O(n)
