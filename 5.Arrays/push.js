console.log("Alternative to Push")
let arr=[1,5,"to","here",578,"work",5.1,"array"],a
let x
function ipush(x)
{
let z=arr.length
arr[z]=x
}
ipush(prompt("enter value to add at last of array"))
console.log(arr)