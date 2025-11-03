# day 16

=> Factorail of a given number

-> solution: 
function fact(n){
    if(n==1) return 1;
    return n* fact(n-1)
}
console.log(fact(5))
 
 
=>  Power of 2
function pow(m){
    if(m==1)return true;
    if(m<1) return false
    return pow(m/2)
}
console.log(pow(6))
