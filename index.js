let switchBtn = document.getElementById("switch")
switchBtn.addEventListener("click", () => {
    if(switchBtn.checked === true){
        document.body.style.background = "purple"
    } else{
        document.body.style.background = "white"
    }
})