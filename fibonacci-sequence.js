// Problem - Given a number "n", find the first "n" elements of the Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];

  do {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  } while (sequence.length < n);

  return sequence;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));

// Big-O = O(n)
