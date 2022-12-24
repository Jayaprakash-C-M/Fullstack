let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], m=0

while(m<al)
{
ar[m]=prompt("enter value", ar[m] , "of array")
m++
}
console.log(ar)


let b=parseInt(prompt("enter array value to find"))

for(m=0;m<=al;)
{
    if(ar[m]=b)
    { 
        console.log(ar[m])
        break
    }
    else{ m++}
}

