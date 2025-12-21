# day54
Leetcode problem no: 49, group anagrams
solution 1:
sort each word to make a key
there are n words with m length
time complexity : O(n * mlog(m))
space complexity: O(n*m);

solution 2:
make  a key without sorting

length of arr = n, length of string =m
then time complexity = O(nm)
space complexity = O(nm)