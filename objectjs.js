let emp =[
    {
        id:1,
        name:"raj",
        sal:15000,
        exp:3
    },
    {
        id:2,
        name:"arun",
        sal:21000,
        exp:2
    },
    {
        id:3,
        name:"joy",
        sal:35000,
        exp:5
    }
]

//wap to find emp with more than 3 years of exp


let a = emp.filter((ele)=>{
    return ele.exp>3
}
)
console.log(a);

// wap to find total salary payed to emp by the company

total=0;
    for(i=0;i<emp.length;i++){
  total+=emp[i].sal;

    }

    console.log(total);


    // map$reduce

    let c=emp.map((ele)=>
    {
        return ele.sal
    })
    console.log(c);
    
    let d=c.reduce((acc,ele) =>{
        return acc+ele;
    })
    console.log(d);


// wap  to give 5% hike for each emp and print updated array


 let e=emp.map((ele)=>
    {
        ele.sal=ele.sal+(ele.sal*5/100)
        return ele.sal
    })
    console.log(e);
    console.log(emp);




// wap to add  a new key and value pair

let f=emp.map((ele)=>
    {
       ele.company="tcs"
    })
    console.log(emp);


//` wap  to remove the duplicate  input:kerala  output:keral
// using filter and index of
let str="kerala"
let ar=str.split("")
console.log(ar);    //['k','e','r','a','l','a']
let g = ar.filter((ele,index)=>{
    return ar.indexOf(ele)==index       //ar.indexOf('k')==0  true  return
                                        //ar.indexOf('e')==1  true  return
                                        //ar.indexOf('r')==2  true  return
                                        //ar.indexOf('a')==3  true  return
                                        //ar.indexOf('l')==4  true  return
                                        //ar.indexOf('a')==5  false  not-return
})
console.log(g);
let ans=g.join("")
console.log(ans);


//with for loop and includes
let str1="kerala"
let res=""
for(i=0;i<str1.length;i++){
    if(!res.includes(str1[i])){
        res+=str1[i]
    }
}
console.log(res);



//











    







    
    
    



