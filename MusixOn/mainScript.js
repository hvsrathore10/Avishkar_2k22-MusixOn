//link signUp and login page with index/Home page of MusixOn webside
const signUp = document.querySelector('#signup');
const login = document.querySelector('#login');

signUp.addEventListener('click',() => {
    window.location.href = 'http://127.0.0.1:5500/MusixOn/signup_page.html';
});
login.addEventListener('click',() => {
    window.location.href = 'http://127.0.0.1:5500/MusixOn/login_page.html';
});

//snackBar
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}