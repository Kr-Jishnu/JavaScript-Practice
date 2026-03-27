//WAP to find  factorial of a given no by using arrow function whoes behavior will be without parameter and with retutn.where the user give the no.

let a=()=>
{
    let n=Number(prompt("enter the value"))
    let fact=1
    for(let i=1;i<=n;i++){
    fact*=i
    }
    return fact

}
console.log(a());
