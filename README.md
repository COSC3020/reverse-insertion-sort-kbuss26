[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

### Response

We can start by determining that the insertion sort algorithm's average case 
must be between its best case of $\Theta(n)$ and its worst case of $\Theta(n^2)$. 
As such, we can determine the average case to be between those asymptotic
complexities.

When analyzing the above code for insertion, we can see that looking at the initial
iterative loop, there exists a nested iterative loop with a terminating condition.
With the best case, the nested loop does not run any time with a sorted list as the
condition to run is not met, so the initial loop iterates a constant number of
executions n times. However, we do not know if the nested loop terminates every time
in the average case.

Given the nested for-loop runs through some n iterations under the initial n iterations in the
outer for-loop, the average case in the insertion sort algorithm is $\Theta(n^2)$.
