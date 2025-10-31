# recursion and callback

=> Recursion
--> Function calls itself to solve a smaller version of the same  problem

Two parts of recursion
> Base case: Stop condition (when to stop calling itself);
> Recursive case: part where function calls itself


* Real life example:
1. Queue of people
2. Comment threads
3. Organisational heirarchies

function recursiveFunctiton(){
    base case
    recursive code
}
=> infinite recursion makes stack overflow
-> the function will be placed in a call stack,,  when infinite recursion happened, the stack become a situation where it cant accomodate new function call

=> Time complexity : O(n)


-> use cases
--> Tree and Graphs
--> Problem can be broken into sub problems;
--> Backtracking, DP, divide and conquer