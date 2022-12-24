let y=parseInt(prompt("please enter reversable value")), x, n=0

while(y!=0)
{
    n=n*10
    x=y%10
    n=n+x
    y/=10
    y=parseInt(y)
   
}
console.log(n)


 y=parseInt(prompt("please enter number to find palendrome")), x, n=0
 
let i=y
while(y!=0)
{
    n=n*10
    x=y%10
    n=n+x
    y/=10
    y=parseInt(y)
   
}

if(i==n)
{
    console.log("given number is Palendrome")
}
else{
    console.log("given number is not a Palendrome")
}