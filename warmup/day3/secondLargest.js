

let arr = [1,2,3,4,56,7,89,5,3,7,5,4,6,8]
arr=[-1,-33,-6,-7]
arr=[2,1]
arr=[1,10,10]
function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    if(arr.length==0)return null
    for (let item of arr) {
      if (largest < item) {
        secondLargest = largest;
        largest = item;
      } else if (secondLargest < item && item!=largest) {
        secondLargest = item;
      }
    }
    return secondLargest
}
console.log("secondLargest is ", secondLargest(arr))