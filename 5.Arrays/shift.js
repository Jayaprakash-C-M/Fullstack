console.log("Alternative to shift ")
let arr=[1,5,"to","here",578,"work",5.1,"array"],a

function ishift()
{
let arr1=[]
let z=arr.length
let y=0
while(y<(z-1))
{
    arr1[y] = arr[(++y)]
    
}
return(arr1)
}

arr=ishift()
console.log(arr)


