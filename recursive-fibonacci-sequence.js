// Problem: Given a number "n", find the nth element of the Fibonacci sequence

function fibonacci(n, sequence = [0, 1]) {
  if (sequence[n] === undefined) {
    return fibonacci(n, [
      ...sequence,
      sequence[sequence.length - 1] + sequence[sequence.length - 2],
    ]);
  }
  return sequence[n];
}

console.log(fibonacci(0) === 0);
console.log(fibonacci(1) === 1);
console.log(fibonacci(6) === 8);

//Time complexity - O(n)
// Space complexity = O(n)
