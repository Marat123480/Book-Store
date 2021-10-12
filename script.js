var admin_login = "test@mail.ru";
var admin_password = "qwerty";
function check(){
    email = document.getElementById("loginEmail").value;
    password = document.getElementById("loginPassword").value;
    if(email == admin_login && admin_password == password){
        sessionStorage.setItem("authorized", "true");
        window.location.replace("admin.html");
    }
}

function authorized(){
    if(sessionStorage.getItem("authorized") == "true"){
        window.location.replace("admin.html");
    }
}

function logout(){
    sessionStorage.removeItem("authorized");
    window.location.replace("auth.html");
}

function checkadmin(){
    if(sessionStorage.getItem("authorized") == null){
        window.location.replace("auth.html");
    }
}