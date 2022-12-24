console.log("Gross Salary program")
let bs= parseInt(prompt("Enter basic salary to find Gross salary"))

console.log("the basic salary you have entered is ",bs)

if(bs<=10000 )
{
    console.log("Gross salary is of",(bs+(bs*0.2)+(bs*0.8)))
}
else if(bs<=20000 && bs>10000)
{
    console.log("Gross salary is of",(bs+(bs*0.25)+(bs*0.9)))
}
else if(bs>20000)
{
    console.log("Gross salary is of",(bs+(bs*0.3)+(bs*0.95)))
}