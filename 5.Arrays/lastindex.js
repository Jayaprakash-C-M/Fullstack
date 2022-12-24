console.log("Alternative to lastindexOf")
let arr=[1,5,"to","here",578,"work",5.1,"array",5,"to",1],a
let y
function lastIndoff(y)
{
let i=arr.length
while(i>=0)
{
    if(arr[i]==y)
    {
        console.log(i,"is lastindexOf value of array value",y)
        return i
    }
    else{
        i--
    }
}
}
a=lastIndoff(prompt("enter value to search the index number of the same"))