console.log(" Checking the oldest & youngest of Three")
let a= parseInt(prompt("Enter Number of classes Held"))
let b= parseInt(prompt("Enter Number of classes attended"))

let p= (b*100)/a
 console.log("percentage of attendance for Student",p)

if(p>=75) {console.log("you are eligible for attending exam")}

else      {console.log("you are not eligible for attending exam")}