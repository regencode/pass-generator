var is_visible = false;

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='#262626';
    }
    
}



function getPasswordStrength(password){
    let s = 0;
    if(password.length > 8){
      s++;
    }
    if(password.length > 12){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    
    return s;
  }


  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector(".pw-meter #password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type","text");
      el.classList.add("active");
    }
  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    if(e.target.value.length === 0){
      strength = 0;
    }
  
    let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
    passwordStrengthSpans[1].style.width = strength*20 + "%";
    if(strength < 2){
      passwordStrengthSpans[0].innerText = "Weak";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#d13636";
    } else if(strength >= 2 && strength <= 4){
      passwordStrengthSpans[0].innerText = "Medium";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#e6da44";
    } else {
      passwordStrengthSpans[0].innerText = "Strong";
      passwordStrengthSpans[0].style.color = "#fff";
      passwordStrengthSpans[1].style.background = "#20a820";
    }

    
    if(password.length>=8)
    {
        document.getElementById("check0").style.color = "green";
    }
    else
    {
      document.getElementById("check0").style.color = "red";
    }
    
    if(password.match(/[A-Z]/i))
    {
      document.getElementById("check1").style.color = "green";
    }
    else
    {
      document.getElementById("check1").style.color = "red";
    }


    if(password.match(/[0-9]/i))
    {
      document.getElementById("check2").style.color = "green";
    }
    else
    {
      document.getElementById("check2").style.color = "red";
    }
    
    if(password.match(/[^A-Za-z0-9-' ']/i))
    {
      document.getElementById("check3").style.color = "green";
    }
    else
    {
      document.getElementById("check3").style.color = "red";
    }

    if(password.match(/[^\s+$]/i)){
      return;
    }
    else {
      document.getElementById("check1").style.color = "red";
    }
    
  });
