console.log("Alternative to indexOf")
let arr=[1,5,"to","here",578,"work",5.1,"array"],a
let y
function Indoff(y)
{
let i=0
let z=arr.length
while(i<z)
{
    if(arr[i]==y)
    {
        console.log(i,"is indexOf value of array value",y)
        return i
    }
    else{
        i++
    }
}
}
a=Indoff(prompt("enter value to search the index number of the same"))