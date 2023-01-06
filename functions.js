//Global vars and localstorage funcs

if (!localStorage.passwordAmount){
    localStorage.setItem('passwordAmount', JSON.stringify(0));
}

function saveToLibrary(){
    var password = getCurrentPassword();
    if(password != ""){
        if (localStorage.passwordAmount < 10){
            localStorage.passwordAmount = Number(localStorage.passwordAmount) + 1;
            localStorage.setItem(`password${localStorage.passwordAmount}`, password);
            alert("Password saved to library");
        }
        else{
            alert("Password limit has been reached (10 password maximum)");
        }
    }
    else{
        alert("Can't save empty password!");
    }
}


//sidebar and navbar functions

function showSidebar(){
    document.getElementById('sidebarIcon').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
}

function hideSidebar(){
    document.getElementById('sidebarIcon').style.display = 'block';
    document.getElementById('sidebar').style.display = 'none';
}

function toMainPage(){
    window.location.href="../index.html";
}

function toPassGenerator(){
    window.location.href="../passGen/passGen.html";
}

function toPassLibrary(){
    window.location.href="../passLibrary/passLibrary.html";
}   

function toPassStrChecker(){
    window.location.href="../passStrengthChecker/passStrengthChecker.html";
}

// Password Generator

function libraryPasswordGenerator(len = 8, includeSymbols=true) {
    var string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()+~`|}{[]:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<len ) {
        entity1 = Math.ceil(string.length*Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length*Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length*Math.random()*Math.random());
        character += string.charAt (entity1);
        character += numeric.charAt( entity2 );
        if(includeSymbols){
            character += punctuation.charAt( entity3 );
        }
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    password = password.substr(0,len);

    return password;
}
// Other functions

function elementSelectable(element, n){
    if(n == 0){
        document.getElementById(element).style.userSelect = 'none';
    } else if(n == 1){
        document.getElementById(element).style.userSelect = 'all';
    }
}

