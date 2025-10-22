let number = -14231
let count = 0 ;
number = Math.abs(number)
if(number === 0) count=1
while(number >0){
    count++;
    number = Math.floor(number /10)
}
console.log(count);