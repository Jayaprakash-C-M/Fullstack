// sUMM OF ALL THE ELEMENYS OF THE ARRAY
let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], m=0, a=0

while(m<al)
{
ar[m]=prompt("enter value", ar[m] , "of array")
m++
}

for(m=0;m<(ar.length);m++)
{
    let b=ar[m]
    b=parseInt(b)
    a=a+b
}
console.log(a)