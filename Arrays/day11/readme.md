# day11
Leetcode problem no: 283 move zeros

-> solution:  inplace, two pointer approach
var moveZeroes = function(nums) {
    let i=0, j=0;
    let length = nums.length;
    for(i=0;i<length;i++){
        if(nums[i]!==0 && nums[j]==0){
            nums[j++] = nums[i];
            nums[i]=0
        }
        if(nums[j]!==0)j++
    }
    return nums
};

Leetcode problem no: 485 max consecutive ones
-> kind of two pointer approach

var findMaxConsecutiveOnes = function(nums) {
    let currentCount=0, maxCount=0;
    for(let i of nums){
        if(i==1) currentCount++ ;
        if(i==0){
            if (maxCount<currentCount) maxCount= currentCount;
            currentCount=0;
        }
    }
    return maxCount<currentCount? currentCount : maxCount; 
};