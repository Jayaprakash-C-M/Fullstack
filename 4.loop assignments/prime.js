let n=prompt("Enter the value of N")
x=1;
let y, z

while(x<=n)
{
   y=1;
   z=0;
    while(y<=n)
    {
        if (x%y==0)
        {
            z=z+1;
        }
        y++;
      
    }
    
    if(z<=2)
    console.log(x)
    x++
}

