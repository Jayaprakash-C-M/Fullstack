console.log("Alternative to shift ")
let arr=[1,5,"to","here",578,"work",5.1,"array"],a
let arr1=[]
function ipop()
{
let z=arr.length
let y=0
while(y<=(z-2))
{
    arr1[y] = arr[(++y)]
    
}
return
}
ipop()
console.log(arr1)


