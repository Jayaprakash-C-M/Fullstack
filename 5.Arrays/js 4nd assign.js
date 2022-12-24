let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], m=0

while(m<al)
{
ar[m]=prompt("enter value", ar[m] , "of array")
m++
}
console.log(ar)

function myfun(a,i)
{
    a=2*a
    ar[i]=a
}

ar.forEach(myfun)
console.log(ar)