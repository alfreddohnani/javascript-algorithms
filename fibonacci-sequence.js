function fibonacci(n) {
  const sequence = [0, 1];

  do {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  } while (sequence.length < n);

  return sequence;
}

// Big-O = O(n)
