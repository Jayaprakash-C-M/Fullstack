let x=prompt("enter starting number")
let z=prompt("enter the ending")
let y=x, n=z
console.log("Number that are divisible by 11 & not divisible by 2 in between",x,"&",z)
while(x<=z)
{
    if (x%11==0)
   
    {
        if (x%2!=0)
        {
            console.log(x)
        }
      
    }
    x++
}
console.log("Number that are not divisible by 2 & 3 in between",y,"&",z)
while(y<=z)
{
    
        if (y%2!=0 && y%3!=0)
        {
            console.log(y)
        }
     y++
}
x=0, y=1
console.log("Fibanacci Series from 1 to",z)

while(x<=z)
{
    console.log(x)
    n=x
    x=x+y
    y=n
    
}