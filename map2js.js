// Input :
// [2,3,4]

// Out:
// [12,8,6]

let a = prompt("enter the number with commas ");  
let arr = a.split(",").map(Number);               
console.log(arr);
let pro = 1;
for (let i = 0; i < arr.length; i++) {
    pro = pro * arr[i];                           
}
let b = new Array();
for (let i = 0; i < arr.length; i++) {
    b[i] = pro / arr[i];                          
}
console.log(b);
