//   WAP  to print todays day using arrow fn whoes behavior will be without parameter and without return 


let a=()=>
{
let d=new Date()
    console.log(d);
    let z=d.getDay()
    console.log(z);
switch (z) {
        case 1:console.log("mon");
        break;
        case 2:console.log("tue");
        break;
         case 3:console.log("wed");
        break;
         case 4:console.log("thur");
        break;
         case 5:console.log("fri");
        break;
         case 6:console.log("sat");
        break;
         case 7:console.log("sun");
        break;

    default: console.log("invalid");
        break;
}

}
a()



// function day(){
//     let d=new Date()
//     console.log(d);
//     let z=d.getDay()
//     console.log(z);
    
    
// }
// day()