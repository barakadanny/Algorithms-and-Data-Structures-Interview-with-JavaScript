//* Math Algorithms
// !1- Fibonacci sequence **************
// Problem: -Give a number 'n', find the first 'n' elements of the Fibonacci sequence.
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// The first two numbers in the sequence are 0 and 1.
// Note: the first two numbers in the sequence must be 0 and 1.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

// >>>>>>>>> Big O Notation = O(n)

// !2- Factorial of a number **************
// Problem: Give an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!,
//is the product of all positive integers less than or equal to 'n'.

// Eg. Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
  let res = 1;
  for (i = n; i > 0; i--) {
    res *= i;
  }
  return res;
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// >>>>>>>>> Big O Notation = O(n)

// !3- Prime number **************
// Problem: Give a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// Eg isPRime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4, 2*2 or 4*1)

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// >>>>>>>>> Big O Notation = O(sqrt(n))

// !4- Power of a two **************
// !5- Recursion **************
// !6- Fibonacci sequence with recursion **************
// !7- Factorial of a number with recursion **************
