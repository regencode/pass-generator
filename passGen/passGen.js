// Password Generator

function passwordGenerator() {
    var string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()+~`|}{[]:;?><,./-=';
    var password = "";
    var character = "";
    var crunch = true;
    var sliderValue = document.getElementById("lengthSlider").value;
    while( password.length< sliderValue) {
        entity1 = Math.ceil(string.length*Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length*Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length*Math.random()*Math.random());
        var charChecked = false;
        var numberChecked = false;
        var symbolChecked = false;

        if(document.getElementById("enableCharInput").checked == true){
            character += string.charAt (entity1);
            charChecked = true;
        } else {charChecked = false;}

        if(document.getElementById("enableNumbersInput").checked == true){
            character += numeric.charAt( entity2 );
            numberChecked = true;
        } else {numberChecked = false;}

        if(document.getElementById("enableSymbolsInput").checked == true){
            character += punctuation.charAt( entity3 );
            symbolChecked = true;
        } else {symbolChecked = false;}
        
        if((charChecked || numberChecked || symbolChecked) == 0){
            alert("At least one setting should be set!")
            break;
        }
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    password = password.substr(0,sliderValue);


        document.getElementById('password').innerHTML = password;

}
var sliderText = document.getElementById("lengthSliderTitle");
var slider = document.getElementById("lengthSlider")
slider.oninput = function() {
    sliderText.innerHTML = "Length: " + this.value;
}

function getCurrentPassword(){
    return document.getElementById('password').innerHTML;
}
