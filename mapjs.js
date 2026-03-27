// [abc, cd, ef]

// Out:
// [fe, dc, cba]


let a=prompt("enter the string with commas ");
let b=a.split(",");
console.log(b);
let c=b.reverse();
console.log(c);
for(let i=0;i<c.length;i++){
    c[i]=(c[i].split("").reverse().join(""));
}
console.log(c);