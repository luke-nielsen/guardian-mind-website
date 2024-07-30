const pwHolder = document.getElementById("password");
document.getElementById("submitbtn").addEventListener("click", function() {
    if(pwHolder.value === "Password"){
        window.location.href = "menu.html";
    }
});