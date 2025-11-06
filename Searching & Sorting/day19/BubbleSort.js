
function bubbleSort(array){
    let length= array.length;
    let i,j;
    for(i=0;i<length-1;i++){
        let swap = false
        for(j=0;j<length-i-1;j++){
            if(array[j]>array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
                swap=true;
            }
        }
        if(!swap) break;
    }
    return array
}

console.log(bubbleSort([453,2,34,5,0,64,231,654]))