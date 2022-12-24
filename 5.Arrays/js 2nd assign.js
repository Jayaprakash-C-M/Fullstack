let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], ar1=[], ar2=[], m=0, ar3=[], n, x=0

while(m<al)
{
ar[m]=prompt("enter value", ar[m] , "of array")
m++
}
console.log(ar)

let al1=parseInt(prompt("enter array length for 2nd array"))
m=0

while(m<al1)
{
ar1[m]=prompt("enter value", ar1[m] , "of array")
m++
}
console.log(ar1)



for(m=0;m<al;m++)
{
ar2[m]=ar[m]
}

for(m=0;m<al1;m++)
{
ar2[(m+al)]=ar1[m]
}

console.log(ar2)
for(m=0;m<(ar2.length);)
{
    ar3[0]=ar2[0]
    for(n=0;n<m;)
    {
        if(ar2[m]==ar2[n])
        {
            break; 
        }
        else{
            ar3[x]=ar2[m]
            console.log(ar3[x])
            console.log(ar2[m])
            x++
            n++
        }
    }
    m++;
}



console.log(ar3)

