# day 9
=> Leetcode problem no: 121 , best time to buy and sell stock
solving ->

let array  =[7,1,5,3,6,4];
let minPrice= Infinity;
let maxProfit = -Infinity
for(let i=0;i< array.length;i++){
    if(minPrice > array[i]) minPrice= array[i];
    if(maxProfit <  Math.abs(array[i]-minPrice) ) { maxProfit =  Math.abs(array[i]-minPrice)}
}
console.log(minPrice, maxProfit)
