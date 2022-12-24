console.log("greatest of three side of triangle")
let x=prompt("please enter first value")
let y=prompt("please enter second value")
let z=prompt("please enter second value")
if(x==y && y==z && x==z)
{

        console.log("Given triangle is Equilateral triangle")    
}
else if(x==y || y==z || x==z)
{
        console.log("Given triangle is isosceles triangle")   
}

else
{
    console.log("Given triangle is Scalene triangle")  
}
