function printHello(){
    console.log("Hello world")
}

printHello();




function print(name){
    console.log("Hello "+ name)    
}

function mul(x,y){
    console.log(x*y)
}
mul(4,6)
print("jishnu")                

function isElegible(age){
    if(age<1) console.log("invalid age");
    else if(age>=18)console.log("Elegible to vote");
    else console.log("Not elegible to vote")
}

isElegible(54)
isElegible(12)
isElegible(18);
isElegible(-1)

function evenOdd(numb){
    if(numb%2==0) console.log("Even")
    else console.log("odd")
}

evenOdd(5)
evenOdd(6)