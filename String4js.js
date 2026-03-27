//Program 5
//-------------
// create a fn with n no. of args, in those args find all the no.s which are greather than 10 and find those element's sum.

let arr = [3,15,25,4,20,8]
function f1(...a)
{
    let sum = a.filter((ele)=>{return ele>10}).reduce((acc,ele)=>{return acc+ele})
    return sum
}
console.log(f1(3,15,25,4,20,8));