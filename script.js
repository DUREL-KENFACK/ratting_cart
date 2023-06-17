
function number(e){
    numberValue=e
    console.log(numberValue)
}

function changeDisplay(){
    let rate=document.getElementById("rating")
    let thank=document.getElementById("thank_you")

    rate.style.display="none"
    thank.style.display="block"

    let nmb=document.getElementById("number")
    nmb.innerHTML=numberValue
}