// WAP to print all the no divisible by 3 and 4 b/w the given two ranges by the user

let lower=prompt("enter the lower limit")
let upper=prompt("enter the upper limit")
for(let a=lower;a<=upper;a++){
    if(a%3==0 && a%4==0){
     console.log(a);
     
    }
}