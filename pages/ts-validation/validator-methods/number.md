# Number

ready function to use to validate numbers

```typescript
v.number()
  .undefined()       // Allows `undefined`
  .required()        // Requires a value
  .min(5)            // Value must be greater than or equal to 5
  .max(10)           // Value must be less than or equal to 10
  .range(5, 10)      // Value must be between 5 and 10
  .integer()         // Value must be an integer
  .positive()        // Value must be positive
  .negative()        // Value must be negative
  .decimal()         // Value must be a decimal number
  .multipleOf(3)     // Value must be a multiple of 3
  .betweenExclusive(5, 10)  // Value must be between 5 (exclusive) and 10 (exclusive)
  .even()            // Value must be an even number
  .odd()             // Value must be an odd number
  .positiveInteger() // Value must be a positive integer
  .negativeInteger() // Value must be a negative integer
  .positiveDecimal() // Value must be a positive decimal number
  .negativeDecimal() // Value must be a negative decimal number
  .divisibleBy(3)    // Value must be divisible by 3
  .perfectSquare()   // Value must be a perfect square
  .primeNumber()     // Value must be a prime number
  .fibonacciNumber() // Value must be a Fibonacci number
  .powerOfTwo()      // Value must be a power of two
  .as<Type>('key')   // Same as for strings
```