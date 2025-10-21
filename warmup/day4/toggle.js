let n=5;
let toggle= 1;
for(let i=0;i<n;i++){
    let row=""
    let toggle= 1;
    for(let j=0;j<i;j++){
        row+= toggle + " ";
        toggle= toggle===1?0:1;
    }
    console.log(row)
}

for(let i=0;i<n;i++){
    let row=""
    for(let j=0;j<i;j++){
        row+= toggle;
        toggle = toggle===1?0:1;
    }
    console.log(row)
}