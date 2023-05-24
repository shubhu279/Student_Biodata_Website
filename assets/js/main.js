console.log("Welcome Folks!!!");


let nav = document.querySelector(".nav");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop >= 100)
    {
        nav.style.top = "0px";
        nav.style.position = "sticky";
        nav.style.transition = "0.4s ease-in"
    }
    else{
        nav.style.top = "-70px";
        nav.style.transition = "0.4s ease-out" 
        nav.style.position = "absolute";       
    }
}