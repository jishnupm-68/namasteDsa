# day10
Leetcode problem no: 88 merge sorted array
 
 -> merge both array and sort => beginner level solution
 -> using to pointer approach and a copy of one array=> medium level solution
 -> using 2 pointer apporach without using extra spaces => advanced solution


let p1=0;
let p2=0;
for(let i=m+n-1;i>0;i--){
    if(p2<0) break;
    if(p1>=0 && nums1[p1]< nums2[p2]) nums1[i] = nums1[p1--]
    else nums1[i] = nums2[p2--]
}
 