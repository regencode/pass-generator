//Global localstorage funcs

if (!localStorage.passwordAmount){
    localStorage.setItem('passwordAmount', JSON.stringify(0));
}

//sidebar and navbar functions

function showSidebar(){
    document.getElementById('sidebarButton').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
}

function hideSidebar(){
    document.getElementById('sidebarButton').style.display = 'block';
    document.getElementById('sidebar').style.display = 'none';
}

function toMainPage(){
    window.location.href="index.html";
}

function toPassGenerator(){
    window.location.href="passGen.html";
}

function toPassLibrary(){
    window.location.href="passLibrary.html";
}   

function toPassStrChecker(){
    window.location.href="passStrengthChecker.html";
}

var $loginForm = $("#loginScreenContainer");
var $registerForm = $("#registerScreenContainer");

function showLogin(){
    $loginForm.fadeIn(200);
}

function hideLogin(){
    $loginForm.fadeOut(200);
}

function hideRegister() {
    $registerForm.fadeOut(200);
}

function changeToRegister() {
    $loginForm.fadeOut(200);
    $registerForm.fadeIn(200);
}

function changeToLogin() {
    $registerForm.fadeOut(200);
    $loginForm.fadeIn(200);
}