let toggleBars = document.querySelector(".toggle-bars");
let nav = document.querySelector(".nav");

toggleBars.addEventListener("click", function(){
    if(toggleBars.firstElementChild.classList.contains("fa-bars")){
        toggleBars.firstElementChild.classList.replace("fa-bars", "fa-times");
    }
    else{
        toggleBars.firstElementChild.classList.replace("fa-times", "fa-bars");
    }

    nav.classList.toggle("showsidebar")
})