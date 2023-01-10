
function countNumPasswords(){

    var passwordAmount  = JSON.parse(localStorage.getItem('passwordAmount')); 
    //parsing string in localStorage to Int
    (document.getElementById("passwordNumCounter").innerHTML = 
       passwordAmount + "/10");

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

function passwordTemplate(content, n){

    var container = document.createElement('div');
    container.setAttribute('class', 'passwordTextContainer');
    container.setAttribute('id', `container${n}`);

    if (n <= 5 ){
    document.getElementById('column-1').appendChild(container);
    }
    else if(n <= 10){
        document.getElementById('column-2').appendChild(container);
    }
    
    var passwordText = document.createElement('p');
    passwordText.setAttribute('class', 'passwordText');
    passwordText.setAttribute('id', `password${n}`);
    container.appendChild(passwordText);
    passwordText.innerHTML = content;

    var editBox = document.createElement('input');
    editBox.setAttribute('class', 'editBox')
    editBox.setAttribute('id', `editBox${n}`);
    editBox.setAttribute('maxlength', '18');
    editBox.setAttribute('placeholder', "Enter new password...");
    container.appendChild(editBox);

    //Setting the copy button:
    var copyButton = document.createElement('div');
    copyButton.setAttribute('class', 'copyButton');
    copyButton.setAttribute('id', `copyButton${n}`);
    var copyIcon = document.createElement('img');
    copyIcon.setAttribute('src', 'imgs/copyIcon.jpg');
    copyIcon.setAttribute('class', 'copyIcon');
    container.appendChild(copyButton);
    copyButton.appendChild(copyIcon);

    //Setting the edit button:
    var editButton = document.createElement('div');
    editButton.setAttribute('class', 'editButton');
    editButton.setAttribute('id', `editButton${n}`);
    var editIcon = document.createElement('img');
    editIcon.setAttribute('src', 'imgs/editIcon.jpg');
    editIcon.setAttribute('class', 'editIcon');
    container.appendChild(editButton);
    editButton.appendChild(editIcon);

    //Setting the edit confirmation buttons
    var acceptEdit = document.createElement('div');
    acceptEdit.setAttribute('class', 'acceptEdit');
    acceptEdit.setAttribute('id', `acceptEdit${n}`);
    var acceptIcon = document.createElement('img');
    acceptIcon.setAttribute('src', 'imgs/tickMark.jpg');
    acceptIcon.setAttribute('class', 'acceptIcon');
    container.appendChild(acceptEdit);
    acceptEdit.appendChild(acceptIcon);

    var rejectEdit = document.createElement('div');
    rejectEdit.setAttribute('class', 'rejectEdit');
    rejectEdit.setAttribute('id', `rejectEdit${n}`);
    var rejectIcon = document.createElement('img');
    rejectIcon.setAttribute('src', 'imgs/crossMark.jpg');
    rejectIcon.setAttribute('class', 'rejectIcon');
    container.appendChild(rejectEdit);
    rejectEdit.appendChild(rejectIcon);




    //document.getElementById(`editButton${passwordAmount}`).addEventListener('click', editPassword(`password${passwordAmount}`));

    var deleteButton = document.createElement('div');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('id', `deleteButton${n}`);
    var deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', 'imgs/deleteIcon.jpg');
    deleteIcon.setAttribute('class', 'deleteIcon');
    container.appendChild(deleteButton);
    document.getElementById(`deleteButton${n}`).appendChild(deleteIcon);
    //document.getElementById(`deleteButton${passwordAmount}`).addEventListener('click', deletePassword(`password${passwordAmount}`));


    countNumPasswords();

    //setting jquery variables 

    var copyButton = $(`#copyButton${n}`);
    var editButton = $(`#editButton${n}`);
    var deleteButton = $(`#deleteButton${n}`);
    var acceptEdit = $(`#acceptEdit${n}`);
    var rejectEdit = $(`#rejectEdit${n}`);
    var inputBox = $(`#editBox${n}`);
    var passwordText = $(`#password${n}`);

    //copy password
    copyButton.click(function() {
        var passwordText = document.getElementById(`password${n}`).innerHTML;
        navigator.clipboard.writeText(passwordText);
        alert("Password copied to clipboard");
    });

    //edit password
    editButton.click(function() { //edit the password

        //hide the other buttons and current password

        copyButton.hide();
        editButton.hide();
        deleteButton.hide();
        passwordText.hide();

        //show confirmation buttons and edit box


        acceptEdit.show();
        rejectEdit.show();
        inputBox.show();

        // to remove alert whenever a user edits a password, cancels the edit, and deletes a password, we use a var to check if the user is editing the password, and only show the alert when the user is editing

        var editing = 1
        acceptEdit.click(function () {

            if((inputBox.val().length) >= 8){ 
                localStorage.setItem(`password${n}`, inputBox.val());
                location.reload(); 
            }
            else if (editing == 1){
                alert("Your new password must be 8+ characters long");
            }

        });

        rejectEdit.click(function () {
            //hide input box, accept button and reject button
    
            acceptEdit.hide();
            rejectEdit.hide();
            inputBox.hide();
    
            //show main buttons and current password
    
            copyButton.show();
            editButton.show();
            deleteButton.show();
            passwordText.show();
            
            editing = 0;
        });
    
        return;
    });


    deleteButton.click(function () {

        //hide other buttons
        copyButton.hide();
        editButton.hide();
        deleteButton.hide();

        //show confirmation buttons
        acceptEdit.show();
        rejectEdit.show();

        acceptEdit.click(function () {

            localStorage.removeItem(`password${n}`);
            var passwordAmount  = JSON.parse(localStorage.getItem('passwordAmount'));

            for(i = n+1; i <= passwordAmount; i++){

                localStorage.setItem(`password${i-1}`, localStorage.getItem(`password${i}`));
                localStorage.removeItem(`password${i}`);
            }

            localStorage.passwordAmount = Number(localStorage.passwordAmount) - 1;
            location.reload(); 
    
        });

        rejectEdit.click(function () {

            //hide accept button and reject button
    
            acceptEdit.hide();
            rejectEdit.hide();
    
            //show main buttons and current password
    
            copyButton.show();
            editButton.show();
            deleteButton.show();
    
        });

    });







}

function createNewPassword(content="password", n=localStorage.passwordAmount){

    if(localStorage.passwordAmount >= 10){
        
        alert("Password limit has been reached (10 password maximum)");
    }
    else {
        localStorage.passwordAmount = Number(localStorage.passwordAmount) + 1;
        localStorage.setItem(`password${localStorage.passwordAmount}`, content);
        var passwordAmount  = JSON.parse(localStorage.getItem('passwordAmount'));

        passwordTemplate(content, passwordAmount);
    }
}


function createAllPasswords() {
    var passwordAmount  = JSON.parse(localStorage.getItem('passwordAmount')); 
    for(var i = 1; i <= passwordAmount; i++){
        var content = localStorage.getItem(`password${i}`);
        passwordTemplate(content, i);
    }
}




function editPassword(n){
    return 0;
}

window.onload = countNumPasswords();
window.onload = createAllPasswords();