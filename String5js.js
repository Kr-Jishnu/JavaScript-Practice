// n elements, first find element to the power of its position, then find the sum

let arr = [3,1,8,9]

let exp = arr.map((ele,i)=>{return Math.pow(ele,i+2)})
console.log(exp);

let ans = exp.reduce((acc,ele)=>{return acc+ele})
console.log(ans);
