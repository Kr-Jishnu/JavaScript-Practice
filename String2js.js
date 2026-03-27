// using in-build method find all the even no.s in the given array

let ar = [81,2,30,89,4]

let evenNos = ar.filter((ele) => {
            return ele%2==0;
        })
console.log(evenNos);
