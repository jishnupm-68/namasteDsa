# day14

>Sum of first n numbers
->> Recursiion tree will form

function sum(n){
    if(n==0) return 0
   return  n+sum(n-1)
}
console.log(sum(10))