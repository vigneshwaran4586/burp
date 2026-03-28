if (document.currentScript) document.currentScript.remove();
function loginUser(event){
    
    let log1 = document.getElementById("user").value

    let log2 = document.getElementById("pass").value
    
    event.preventDefault()

if(log1 === "Cybertronadmin" && log2 === "Cybertronpassword"){
   window.location.href = "flag.html";
}
else{
    alert("Login Fails Try Again..!")
}
}