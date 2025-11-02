# day 15

=> Sum of all elements in an Array

-> solution 1:
function sumArray(array,i=0){
    if(i==array.length) return 0
    return array[i] + sumArray(array, ++i)
}
let array=[1,2,4,5,6];
console.log(sumArray(array))


-> solution 2:
function sum(n=array.length-1){
    if(n==0) return array[n];
    return array[n]+ sum(n-1)
}