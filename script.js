let taskbar = document.getElementsByClassName("taskbar")[0]
let stratmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(stratmenu.style.bottom == "50px"){
        stratmenu.style.bottom = "-650px"
    }
    else{
        stratmenu.style.bottom = "50px"
    }
})