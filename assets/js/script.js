function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var cpass = document.getElementById("cpass").value;
    var phone = document.getElementById("phone").value;

    // Validate name
    if(name == ""){
        document.getElementById("Name").innerHTML = "please fill the name";
        return false;
    }

     // Validate name
     if(email == ""){
        document.getElementById("emailids").innerHTML = "please fill the email";
        return false;
    }

    if(email.indexOf("@")<=0){
        document.getElementById("emailids").innerHTML = "Email is not valid";
        return false;
    }
    if(email.charAt(email.length-4)!="."&&email.charAt(email.length-3)!="."){
        document.getElementById("emailids").innerHTML = "Email is not valid";
        return false;
    }

     // Validate user name
     if(user == ""){
        document.getElementById("username").innerHTML = "please fill the user name";
        return false;
    }

    if(user.length<= 3 || user.length> 20){
        document.getElementById("username").innerHTML = "username must be between 3 and 20";
        return false;
    }

    if(!isNaN(name)){
        document.getElementById("username").innerHTML = "username must contain characters not only numbers";
        return false;
    }

     // Validate password
     if(password == ""){
        document.getElementById("passwords").innerHTML = "please fill the password";
        return false;
    }

    if(password.length<= 5 || password.length> 20){
        document.getElementById("passwords").innerHTML = "password must be between 5 and 20";
        return false;
    }

    // Validate confirm password
    if(cpass == ""){
        document.getElementById("confpass").innerHTML = "please fill the confirm password";
        return false;
    }

    if(cpass.length<= 5 || cpass.length> 20){
        document.getElementById("confpass").innerHTML = "password must be between 5 and 20";
        return false;
    }

    if(cpass != password){
        document.getElementById("confpass").innerHTML = "password must be confirmed";
        return false;
    }

    // Validate telephone number
    if(phone == ""){
        document.getElementById("mobileno").innerHTML = "please fill the telephone number";
        return false;
    }

    if(!phone.length== 10){
        document.getElementById("mobileno").innerHTML = "telephone number must be 10 numbers";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById("mobileno").innerHTML = "telephone must contain only numbers";
        return false;
    }


}