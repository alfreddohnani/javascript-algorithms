# How to represent the complexity of an Algorithm

We cannot calculate the absolute running time of an algorithm, hence, we use Asymptotic notations; mathematical tools used to represent time and space complexity.

1. Big-O Notation(O-Notation) - Worst case complexity
2. Omega Notation - Best case complexity
3. Theta Notation  - Average case complexity

## Big-O Notation

- Expressed in terms of input
- Focuses on the big picture

## Big-O Time complexity

- we count the number of times a statement executes based on the input size
O(n) - Linear
O(1) - Constant
O(n e2) - Quadratic
O(n e3) - Cubic
O(logn) - Logarithmic  - input size reduces by half on each iteration

### Big-O Space complexity

O(1) - Constant
O(n)  - Linear - spaces needed grows with input size
O(logn) - Logarithmic - Space needed is half of the input

## NB

- Different algorithms exist for thesame problem. The right algorithm to use depends on the given contraints

### Objects Big-O

Insert O(1)
Remove O(1)
Access O(1)
Search O(n)

### Arrays Big-O

Insert or remove at end - O(1)
Insert or remove at beginning - O(n) - this is because the index has to be reset for every remaining element in the array.
Access - O(1)
Search - O(n)

### Math Algorithms

Fibonacci sequence
Factorial of a number
Prime number
Power of two