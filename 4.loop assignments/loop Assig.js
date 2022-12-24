let n=prompt("please enter n value"), x=1
console.log("1 to n number using while & do while ")
while(x<=n)
{
    console.log(x)
    x++;
}

x=1
do{
    console.log(x)
    x++;

}while(x<=n)

console.log("1 to n number using loop ")

for(x=1;x<=n;x++)
{
    console.log(x)
    
}
console.log("1 to n  even number using loops ")

for(x=1;x<=n;x++)
{
    if (x%2==0)
    {console.log(x)}  
}

console.log("1 to n  even number using while ")

x=1;
while(x<=n)
{
    if (x%2==0)
    {console.log(x)} 
    x++; 
}

console.log("1 to n  odd number using while ")
x=1;
while(x<=n)
{
    if (x%2!=0)
    {console.log(x)} 
    x++; 
}
x=1;

console.log("1 to n  odd number using do while ")
do
{
    if (x%2==0)
    {console.log(x)} 
    x++; 
}while(x<=n)

console.log("1 to n  odd number using while ")
x=1;
do
{
    if (x%2!=0)
    {console.log(x)} 
    x++; 
}while(x<=n)

console.log("1 to n  prime number using loops ")
x=1;
let y=1, z
while(x<=n)
{
    while(y!=n)
    {
        if (x%y==0)
        {
            z=z+1;
            y++;
        }
    }
    
    if(z<=2)
    console.log(z)
}



    