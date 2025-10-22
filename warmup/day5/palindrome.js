let n = -121;

let reversedNumber = 0;
let originalNumber = n;
if(n<0) return console.log("Not a Palindrome for negative numbers");
while(originalNumber>0){
    let digit = originalNumber % 10;
    reversedNumber= reversedNumber *10 + digit;
    originalNumber = Math.floor(originalNumber/10);
}
let ans = reversedNumber === n?("Palindrome"):("Not a Palindrome");
console.log(ans);