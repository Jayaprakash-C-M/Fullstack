let al=parseInt(prompt("enter array length for 1st array"))
let ar=[], m=0, squaredEvenNums=[], EvenNums=[]

while(m<al)
{
ar[m]=prompt("enter value", ar[m] , "of array")
m++
}
console.log(ar)

function myfun(a,i)
{
    return (a%2)==0
}

EvenNums=ar.filter(myfun);

function sqfun(a)
{
    a=a*a;
    return a;
}

squaredEvenNums=EvenNums.map(sqfun);
console.log(squaredEvenNums)    