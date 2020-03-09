email = 'larissa.croco@neon.com.br';


function login(){
    tree = document.getElementById('tree-2');
    star = document.getElementById('star');
    christmasBall = document.getElementById('christmas-ball');
    snowflake = document.getElementById('snowflake');
    santa = document.getElementById('santa');
    
    errorMessage = document.getElementById('error-message');
    button = document.getElementById('button').value;
    emailUser = document.getElementById('email');

    if(email === emailUser.value){
        
        tree.classList.add('animation');
        tree.classList.remove('hidden');
        star.classList.remove('hidden');
        christmasBall.classList.remove('hidden');
        snowflake.classList.remove('hidden');
        santa.classList.remove('hidden');


        emailUser.classList.remove('input--error');
        errorMessage.classList.add('hidden');
        showAlert();
    } else {
        errorMessage.classList.remove('hidden');
        emailUser.classList.add('input--error');
    }
}

function selectBox(){
    emailUser = document.getElementById('email');
    selectionBox = document.getElementById('selection-box');
    if(email === emailUser.value){
        selectionBox.classList.remove('hidden');
    } else{
        selectionBox.classList.add('hidden');
    }
}

function showAlert(){
    alert = document.getElementById('alert');
    alert.classList.remove('alert--hidden');
    setTimeout(() => {
        hideAlert();
    }, 5000);
}
function hideAlert(){
    alert.classList.add('alert--hidden');
}