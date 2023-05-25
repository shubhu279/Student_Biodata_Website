// alert("Welcome Folks!!!");

/*Moving the Nav bar -- will use this later in other pages*/

// let nav = document.querySelector(".nav");
// window.onscroll = ()=>{
//     if(document.documentElement.scrollTop >= 100)
//     {
//         nav.style.top = "0px";
//         nav.style.position = "sticky";
//         nav.style.transition = "0.4s ease-in"
//     }
//     else{
//         nav.style.top = "-70px";
//         nav.style.transition = "0.4s ease-out"
//         nav.style.position = "absolute";
//     }
// }

//Toggle-eye

const togglePassword = document.querySelector("#Toggle-eye");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("fa-eye");
});
