let array = [3,9,1,4,7,0];
let target=4234;
function linearSearch(array, target){
    for(let i in array){
    if(array[i]===target) return i
}
return -1
}
console.log(linearSearch(array, target))