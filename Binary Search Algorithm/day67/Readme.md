# day 67
Letcode problem : 69, Square root of x
use binary search algorithm to solve this problem

> finding middle value in binary search:
 middle = ((left+right)/2)      => The value will be overflow in some languages

 so better way to find the middle element is shown below

 middle = l + [ (r-l)/2]    => it will never over flow

