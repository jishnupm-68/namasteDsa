
function reverseNumber(number){
    let revNumber =0;
    while(number>0){
        let digit = number %10;
        revNumber = (revNumber *10) + digit;
        number = Math.floor(number/10);
    }
    return revNumber;
}

console.log(reverseNumber(1234)); //4321
console.log(reverseNumber(1200)); //21