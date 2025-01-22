# JavaScript Division by Zero Bug

This repository demonstrates a common error in JavaScript: division by zero. The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## Bug Description

The `myFunction` function attempts to divide `a` by `b` without checking if `b` is zero. This results in a runtime error when `b` is zero. 

## Solution

The `bugSolution.js` file addresses the issue by explicitly checking if `b` is zero before performing the division. If `b` is zero, the function returns an appropriate value (in this case, 0) to prevent the error.

## How to run the code

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a text editor or IDE.
3. Execute the JavaScript code using Node.js or a browser's developer console.