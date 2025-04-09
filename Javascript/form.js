function submitfile(){
    // alert("working")
    username = document.getElementById("username")
    password = document.getElementById("password")
    var user1 = "emmy001"
    var pass1 = "runaway!!!"
    if(username.value===user1 && password.value===pass1){
        alert("LOG IN SUCCESSFUL")
    }else{
        alert("Error Logging In")
    }
}
