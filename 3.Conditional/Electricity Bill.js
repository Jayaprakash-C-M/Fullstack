console.log("Electricity Bill Caliculation")
let bs= parseInt(prompt("Enter your units burnt in this month"))

console.log("the Units you have entered is ",bs)

if(bs<=50 )
{
    console.log("Total Electricity bill is of",((bs*0.5)+(bs*0.5*0.2)))
}
else if(bs<=150 && bs>50)
{
    console.log("Total Electricity bill is of",((bs*0.75)+(bs*0.75*0.2)))
}
else if(bs<=250 && bs>150)
{
    console.log("Total Electricity bill is of",((bs*1.2)+(bs*1.2*0.2)))
}
else if(bs>250)
{
    console.log("Total Electricity bill is of",((bs*1.5)+(bs*1.5*0.2)))
}