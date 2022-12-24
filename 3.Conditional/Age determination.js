console.log(" Checking the oldest & youngest of Three")
let a= parseInt(prompt("Enter your 1st person age"))
let b= parseInt(prompt("Enter your 2nd person age"))
let c= parseInt(prompt("Enter your 3rd person age"))



if(a<b && a<c)
{
    console.log("1st Person is younger than other Two")

    if(b<c) {console.log("3rd person is older than other Two")}
    else    {console.log("2rd person is older than other Two")}
}
else if(b<a && b<c)
{
    console.log("2st Person is younger than other Two")

    if(a<c) {console.log("3rd person is older than other Two")}
    else    {console.log("1rd person is older than other Two")}
}