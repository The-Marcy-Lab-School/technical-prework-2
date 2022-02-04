# JavaScript Prework Problem Set 0-1

### Directions 
You will be applying what you've learned about JavaScript by implementing various functions. This assignment will demonstrate your code fluency and problem-solving abilities.

0. You will be writing code using [this Repl.it](https://replit.com/@AnnDuong1/MarcyLabPreWork1). Once you open this Repl.it in a new tab, you can make a personal copy by forking. Click on the button in the top right corner that says **Fork**.
1. Once the Repl.it has been forked, you will write all your code in the `index.js` file.
2. The function signatures have already been created for you. You only need to write the body of each function.
3. Do not change the names of the functions. However, you can change the name of the function _parameters_ if you'd like. 
4. Each function needs to **return** a specific value. Make sure none of your functions return `undefined`.
5. **Test your functions by invoking them.** You can `console.log` the invocation of a function to print out its return value. There is a section of code after all functions have been declared where you can test your code.
6. When you are finished, submit the URL of your Repl.it to Canvas. 


### Coding Problems 

1. Write a function that takes an array and returns its first element. 

Examples:
```
firstElement(['hello', 1, true, 6]);  // returns 'hello'
firstElement([2, 3, 'hi']);           // returns 2
firstElement([true, false]);          // returns true
```

2. Write a function that takes an array and returns its last element. 

Examples:
```
lastElement([2, 3, 'hi']);           // returns 'hi'
lastElement(['hello', 1, true, 6]);  // returns 6
lastElement([true, false]);          // returns false
```

3. Write a function that takes an integer argument, and returns an array containing all integers between 1 and the argument (inclusive), in ascending order. You may assume that the argument will always be a positive integer.

Examples:
```
sequence(5);    // returns [1, 2, 3, 4, 5]
sequence(3);    // returns [1, 2, 3]
sequence(1);    // returns [1]
```

4. Write a function that takes an array of numbers and returns the sum of all numbers in the original array.

Examples:
```
sum([6, 7, 8]);         // 21
sum([-100, 2, 1]);      // -97
sum([1.0001, 2, 3]);    // 6.0001
```

5. Write an average function that takes an array of integers as input, adds all of the integers together, divides the result by the number of entries in the array, and returns the result as a number.

```
average([1, 2, 6]);     // returns 3 
average([1, 2, 3]);     // returns 2
average([1, 2, 6, 8]);  // returns 4.25
average([-1, 2, 5]);    // returns 2
```

6. Write a function that takes an array of integers and returns a new array of integers with double the original values.

Examples: 
```
doubleArray([3, 6, 8]);          // [6, 12, 16]
doubleArray([3.25, 2, 5.5]);     // [6.5, 4, 11]
doubleArray([-1, 4, -3]);        // [-2, 8, -6]
doubleArray([]);                 // []
```

7. Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Examples:
```
multiplyList([3, 5, 7], [9, 10, 11]);         // returns [27, 50, 77]
multiplyList([5, 10, 15, 20], [1, 2, 3, 4]);  // returns [5, 20, 45, 80]
```

8. Write a function that takes in a person object and returns an introduction message. This object argument will have two properties `name` and `age`. The returned string should be in the format `My name is ... I am ... years old.`.

Examples:
```
introducePerson({name: 'Ann', age: 29});    // returns "My name is Ann. I am 29 years old."
introducePerson({age: 30, name: 'Maya'});   // returns "My name is Maya. I am 30 years old."
introducePerson({name: 'Reuben', age: 31}); // returns "My name is Reuben. I am 31 years old."
```
