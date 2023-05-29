let togglePassword = document.querySelectorAll(".Toggle-eye");
let password = document.getElementById("password");

togglePassword.forEach(val => {
    val.addEventListener("click", function () {
      // toggle the type attribute
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    
      // toggle the icon
      this.classList.toggle("fa-eye");
    });
});

let strength = document.getElementById("strength");

password.addEventListener("input",()=>{
  if(password.value.length > 0)
  {
    strength.style.display = "block";
  }
  else{
    strength.style.display = "none";
  }
  if(password.value.length <= 3){
    strength.innerHTML = "*Password is Weak";
    strength.style.color = "#ff5925";
    password.style.borderColor = "red";
  }
  else if(password.value.length < 8){
    strength.style.color = "yellow";
    password.style.borderColor = "yellow";
    strength.innerHTML = "*Password is Medium";
  }
  else{
    strength.style.color = "rgb(2, 255, 2)";
    password.style.borderColor = "rgb(2, 255, 2)";
    strength.innerHTML = "*Password is Strong";
  }
})