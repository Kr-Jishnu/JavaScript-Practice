//WAP to find the smallest no. among the user given no.  using named fn with parameter and with return

function small(a,b){
  
    if(a<b){
        return `${a} is small`
    }
    else{
        return `${b} is small`
    }


}
  let c=Number(prompt("enter the value 1"))
  let d=Number(prompt("enter the value 2"))
  console.log(small(c,d))


