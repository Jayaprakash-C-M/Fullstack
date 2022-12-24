let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], ar1=[], ar2=[], m=0
let l, l1, l2
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
{Ō
ar2[(m+al)]=ar1[m]
}

console.log(ar2)
