console.log("grades program")
let p=prompt("Enter Physics marks")
let c=prompt("Enter Chemistry marks")
let b=prompt("Enter Biology marks")
let m=prompt("Enter Mathematics marks")
let co=prompt("Enter Computer Marks"), t

t=p+c+b+m+co

t=t/500
console.log(t)

if(t>=90)
{
    console.log("The person got Grade A")
}
else if(t>=80 && t<90)
{
    console.log("The person got Grade B")
}
else if(t>=70 && t<80)
{
    console.log("The person got Grade C")
}
else if(t>=60 && t<70)
{
    console.log("The person got Grade D")
}
else if(t>=40 && t<60)
{
    console.log("The person got Grade E")
}
else if(t<40)
{
    console.log("The person got Grade F")
}