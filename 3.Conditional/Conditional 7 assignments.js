console.log("greatest of two number")
let x=prompt("please enter first value")
let y=prompt("please enter second value")

if(x>y)
{
    console.log(x,'is greater than',y)
}
else{
    console.log(y,'is greater than',x)
}

console.log("greatest of three number")
let z=prompt("please enter second value")
if(x>y && x>z)
{

        console.log(x,'is greater than',y,'&',z)    
}
else if(y>z && y>x)
{
        console.log(y,'is greater than',x,'&',z)    
}

else if(z>x && z>y)
{
        console.log(z,'is greater than',x,'&',y)  
}

console.log("Find the number is Negetive or Positive or Zero ")

if(x>0)
{
   console.log(x,'is Positive Number')    
}
else if(x<0)
{
   console.log(x,'is Negetive NUmber')    
}

else if(x==0)
{
    console.log(x,'is Equal to Zero')  
}

console.log("Find the number is divisible by 11 & 5 or not ")

if(x%11==0 && x%5==0)
{
   console.log(x,'is divisible by 11 & 5')    
}
else
{
  console.log(x,'is not divisible by 11 & 5') 
}

console.log("Find the number is even or not ")

if(x%2==0)
{
    console.log(x,'is Even Number') 
}
else
{
    console.log(x,'is Odd Number') 
}

console.log("Find the number is leap year or not")

if(x%4==0)
{
    console.log(x,'is Leap Year') 
}
else
{
    console.log(x,'is Not a leap Year') 
}

console.log("Find the number or alphabit to find to display its type")
let n=prompt("enter any number or alphabit to find to display its type")

if(n<0 || n>0 || n==0)
{
    console.log(n,'is Number') 
}
else
{
    console.log(n,'is a alphabit') 
}

console.log("Find the value is Vowel or not")

if(n=="a" || n=="e" || n=="i" || n=="o" || n=="u" || n=="A" || n=="E" || n=="I" || n=="O" || n=="U" )
{
    console.log(n,'is Vowel') 
}
else if((n > 'a' && n <= 'z') || (n > 'A' && n <= 'Z'))
{
    console.log(n,'is a Consonent') 
}

else {

    console.log("enter value is incorrect")
}
