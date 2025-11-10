

// javascript approach 
function mergeSort(array){
    if(array.length<=1) return array
    let leftArr = [], rightArr=[];
    let mid= Math.floor(array.length/2);
    leftArr=  mergeSort(array.slice(0, mid));
    rightArr= mergeSort(array.slice(mid));
    return merge(leftArr, rightArr);
}
function merge(arr1, arr2){
    let result= []
    let i=0, j=0;
    while(i< arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]) result.push(arr1[i++])
        else result.push(arr2[j++]);
    }
    return [...result, ...arr1.slice(i), ...arr2.slice(j)]
}
console.log(mergeSort([2,5346,76,435,223,41,564,45,63,54,234]))


