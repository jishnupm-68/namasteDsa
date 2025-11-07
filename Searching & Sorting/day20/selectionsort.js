

function selectionSort(array){
    for(let i=0;i<array.length-1;i++){
        let minIndex = i;
        for(let j = i+1; j<array.length;j++){
            if(array[j]<array[minIndex]) minIndex = j; 
        }
        if(i!==minIndex) [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}

console.log(selectionSort([23,432,56,23672,321,431234,3474,5632,1,234]))


 