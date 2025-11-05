let arr  = [-1,0,3,5,8,12];
let target = 12;
function binarySearch(array, target){
    let start = 0 ;
    let end = array.length-1;
    let i=0
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(array[mid]==target) return mid;
        if(target<array[mid]) end=mid-1
        else start = mid+1
    }
    return -1
}
console.log(binarySearch(arr, target))