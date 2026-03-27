// Q:7)WAP to find the largest number among the given 3 number by the user
let n=prompt("Enter first number")
let n2=prompt("Enter second number")
let n3=prompt("Enter third number")

n=Number(n)
n1=Number(n2)
n2=Number(n3)
if(n>n3 && n>n2){
    console.log(`The number ${n} is greatest`)
}
else if(n2>n && n2>n3){
    console.log(`The number ${n2} is greatest`)
}
else{
    console.log(`The number ${n3} is greatest`)
}