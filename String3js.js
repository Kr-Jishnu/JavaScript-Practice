// WAP to find the sum of all the no.s which are divisable by 3

let y = [30,8,9,4,3]
let sum = y.filter((ele)=>{return ele%3==0}).reduce((acc, ele) => {return acc+ele})
console.log(sum);
