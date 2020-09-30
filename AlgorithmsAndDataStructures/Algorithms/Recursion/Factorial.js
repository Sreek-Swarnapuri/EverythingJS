// Recursive function
function FactorialRecursive(number) {
    if(number == 1)
        return 1;
    return number * FactorialRecursive(number - 1);   
}

// Iterative case
function FactorialIterative(number) {
    let factorial = number;
    for(i=number-1;i>0;i--) {
        console.log(factorial + "*" + i + "=" + (factorial*i));
        factorial = factorial * i;
    }

    return factorial;
}

n = 10
console.log("Factorial of " + n + " using Iteration: " + FactorialIterative(10));
console.log("Factorial of " + n + " using Recursion: " + FactorialRecursive(10));