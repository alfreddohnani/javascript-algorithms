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

### Fibonacci Sequence

Previous two numbers equals next number. Starts with 0 and 1.
e.g [0,1,1,2,3,5,8,13]

### Factorial Of A Number

The factorial of a non-negative integer "n"(denoted by n!), is the **product** of all positive integers **less than or equal** to n.
The factorial of 0 is 1.
`factorial(4) = 4 * 3 * 2 * 1=24`

### Prime Number

A natural number greater than 1 that is not the product of two smaller natural numbers. Simply put, it is only divisible by 1 and itself.

### Power of two

Given a positive integer "n", determine if the number is a power of 2 or not.

## Recursion

Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.
It is when a function calls itself. It can be applied when you find yourself breaking down a problem into smaller versions of thesame problem.
Every recursion needs to have a base case - a condition to terminate the recursion.
Recursion may simplify the solution but it does not always translate to a faster or more efficient solution.
