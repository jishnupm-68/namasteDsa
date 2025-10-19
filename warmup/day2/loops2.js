let arr = [4,2,9,-5,55,-6,-8,0,10,8,20];

// function for search an element present in a array or not
function searchElement(array, element){
    let answer = -1;
    for(let i=0;i<array.length;i++){
        if(array[i]==element) return i
    }
    return -1
}

console.log(searchElement(arr, 10))


//function for counting number of negative numbers present in a array

function countNegativeNumber(array){
    let count=0;
    for(let item of array){
        if(item<0) count++;
    }
    return count;
}
console.log(countNegativeNumber(arr))

//function to findout the max value in a array
function maxValue(array){
    let max = -Infinity;
    for(let i=1;i<array.length;i++){
        if(max<array[i]) max= array[i]
    }
    return max;
}

// arr=[-2,-7,-8,-1]
console.log("value is : " , maxValue(arr))


function minElement(array){
    let minElement = Infinity;
    for(let i of array){
        if(minElement>i)minElement=i
    }
    return minElement
}

console.log("min element is ", minElement(arr));
