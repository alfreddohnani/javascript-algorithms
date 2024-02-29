// Problem: Given a positive integer "n", determine if the number is a power of 2 or not.

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }

  return true;
}

console.log(0, isPowerOfTwo(0));
console.log(1, isPowerOfTwo(1));
console.log(2, isPowerOfTwo(2));
console.log(5, isPowerOfTwo(5));
console.log(4, isPowerOfTwo(4));
console.log(8, isPowerOfTwo(8));
console.log(16, isPowerOfTwo(16));

// Time complexity - O(logn)

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

// Time complexity - O(1)

console.log("Bitwise", 0, isPowerOfTwoBitWise(0));
console.log("Bitwise", 1, isPowerOfTwoBitWise(1));
console.log("Bitwise", 2, isPowerOfTwoBitWise(2));
console.log("Bitwise", 5, isPowerOfTwoBitWise(5));
console.log("Bitwise", 4, isPowerOfTwoBitWise(4));
console.log("Bitwise", 8, isPowerOfTwoBitWise(8));
console.log("Bitwise", 6, isPowerOfTwoBitWise(16));
