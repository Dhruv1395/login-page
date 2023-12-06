function btn(){
    var u = document.getElementById("email").value;
    var p = document.getElementById("pass").value;
    if(u=="dhruv1395" && p=="1395"){
        alert("Login successfull!👍");
        window.location.assign("file:///D:/framset/frameset.html");
         } 
        
     else{
        alert("⚠️ wrong username or password.");
        
    }
}
