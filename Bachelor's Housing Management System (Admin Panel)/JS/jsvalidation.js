 function validateform(){
      var name=document.myform.name.value;
      var email=document.myform.email.value;
      var username=document.myform.username.value;  
      var password=document.myform.password.value;
      var confirmpassword=document.myform.confirmpassword.value;
      var birth=document.myform.birth.value;
      var gender=document.myform.gender.value;    
      var npassword=document.myform.npassword.value; 
       var rnpassword=document.myform.rnpassword.value; 
      
 


      if (username==null || username==""){  
        alert("Name must be Filled-Up");  
        return false;  
      }else if(password.length<5){  
        alert("Password must be at least 5 characters long.");  
        return false;  
      }  
    }
    function checkEmpty() {
        if (document.myform.username.value = "") {
          alert("Name must be Filled-Up");
            return false;  
        }
  }
     function checkName() {
      if (document.getElementById("name").value == "") {
          document.getElementById("nameErr").innerHTML = "Must be Filled-Up";
          document.getElementById("nameErr").style.color = "red";
          document.getElementById("name").style.borderColor = "red";
      }else if(document.getElementById("name").value.length<=4){
          document.getElementById("name").style.borderColor = "red";
          document.getElementById("nameErr").style.color = "red";
        document.getElementById("nameErr").innerHTML = "Required at least 5 characters.";
      }
      else{
        document.getElementById("nameErr").innerHTML = "";
          document.getElementById("nameErr").style.color = "red";
        document.getElementById("name").style.borderColor = "green";
      }
        }
     
      function checkLName() {
      if (document.getElementById("lname").value == "") {
          document.getElementById("lnameErr").innerHTML = "Must be Filled-Up";
          document.getElementById("lnameErr").style.color = "red";
          document.getElementById("lname").style.borderColor = "red";
      }else if(document.getElementById("lname").value.length<=4){
          document.getElementById("lname").style.borderColor = "red";
          document.getElementById("lnameErr").style.color = "red";
        document.getElementById("lnameErr").innerHTML = "Required at least 5 characters.";
      }
      else{
        document.getElementById("lnameErr").innerHTML = "";
          document.getElementById("lnameErr").style.color = "red";
        document.getElementById("lname").style.borderColor = "green";
      }
        }

              function checkContact() {

      if (document.getElementById("contact").value == "") {
          document.getElementById("contactErr").innerHTML = "Phone Number is required";
          document.getElementById("contactErr").style.color = "red";
          document.getElementById("contact").style.borderColor = "red";
      }else if(document.getElementById("contact").value.length<=10){
          document.getElementById("contact").style.borderColor = "red";
          document.getElementById("contactErr").style.color = "red";
        document.getElementById("contactErr").innerHTML = "Please enter your 11 digit number";
      }
      else{
        document.getElementById("contactErr").innerHTML = "";
          document.getElementById("contactErr").style.color = "red";
        document.getElementById("contact").style.borderColor = "green";
      }
        }

 
   function checkLoc() {
      if (document.getElementById("location").value == "") {
          document.getElementById("locationErr").innerHTML = "Location must be Filled-Up";
          document.getElementById("locationErr").style.color = "red";
          document.getElementById("location").style.borderColor = "red";
      }
      else{
        document.getElementById("locationErr").innerHTML = "";
          document.getElementById("locationErr").style.color = "red";
        document.getElementById("location").style.borderColor = "green";
      }
        }
          function checkFloor() {
      if (document.getElementById("floor").value == "") {
          document.getElementById("floorErr").innerHTML = "Floor must be Filled-up";
          document.getElementById("floorErr").style.color = "red";
          document.getElementById("floor").style.borderColor = "red";
      }
      else{
        document.getElementById("floorErr").innerHTML = "";
          document.getElementById("floorErr").style.color = "red";
        document.getElementById("floor").style.borderColor = "green";
      }
        }

        function checkRoom() {
      if (document.getElementById("room").value == "") {
          document.getElementById("roomErr").innerHTML = "Room must be Filled-Up";
          document.getElementById("roomErr").style.color = "red";
          document.getElementById("room").style.borderColor = "red";
      }
      else{
        document.getElementById("roomErr").innerHTML = "";
          document.getElementById("roomErr").style.color = "red";
        document.getElementById("room").style.borderColor = "green";
      }
        }

    function checkAdd() {
      if (document.getElementById("address").value == "") {
          document.getElementById("addErr").innerHTML = "Address must be Filled-Up";
          document.getElementById("addErr").style.color = "red";
          document.getElementById("address").style.borderColor = "red";
      }
      else{
        document.getElementById("addErr").innerHTML = "";
          document.getElementById("addErr").style.color = "red";
        document.getElementById("address").style.borderColor = "green";
      }
        }

    
  function checkEmail() {
      if (document.getElementById("email").value == "") {
          document.getElementById("emailErr").innerHTML = "Email must be Filled-Up";
          document.getElementById("emailErr").style.color = "red";
          document.getElementById("email").style.borderColor = "red";
      }
     else if(document.getElementById("email").value.indexOf('@')<=0){
        document.getElementById("emailErr").innerHTML=" Enter a valid email format with @ sign!";
        document.getElementById("emailErr").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
      } 
       else if(document.getElementById("email").value.search('@gmail.com')==-1){
        document.getElementById("emailErr").innerHTML="Invalid Email Format! (must include -->@gmail.com)";
        document.getElementById("emailErr").style.color = "red";
        document.getElementById("email").style.borderColor = "red";
      }    
       else{
        document.getElementById("emailErr").innerHTML = "";
          document.getElementById("emailErr").style.color = "red";
        document.getElementById("email").style.borderColor = "green";
      }
    }


      function checkUsername() {
      if (document.getElementById("username").value == "") {
          document.getElementById("usernameErr").innerHTML = "UserName must be Filled-Up";
          document.getElementById("usernameErr").style.color = "red";
          document.getElementById("username").style.borderColor = "red";
      }else if(document.getElementById("username").value.length<5){
          document.getElementById("username").style.borderColor = "red";
          document.getElementById("usernameErr").style.color = "red";
        document.getElementById("usernameErr").innerHTML = "UserName must be at least 5 characters long.";
      }
      else{
        document.getElementById("usernameErr").innerHTML = "";
          document.getElementById("usernameErr").style.color = "red";
        document.getElementById("username").style.borderColor = "green";
      }
        }

 

      
        function checkPass(){
          if (document.getElementById("password").value == "") {
          document.getElementById("passwordErr").innerHTML = "Password must be Filled-Up";
          document.getElementById("passwordErr").style.color = "red";
          document.getElementById("password").style.borderColor = "red";
      }else if(document.getElementById("password").value.length<8){
          document.getElementById("password").style.borderColor = "red";
          document.getElementById("passwordErr").style.color = "red";
        document.getElementById("passwordErr").innerHTML = "Password must be at least 8 characters long.";
     }
     else if(document.getElementById("password").value.search(/[!\@\#\$\%]/)==-1){
      document.getElementById("passwordErr").innerHTML = "Password must have one special characters (@,#,$,%)!.";
          document.getElementById("password").style.borderColor = "red";
          document.getElementById("passwordErr").style.color = "red";
        
     }
    
       else{
        document.getElementById("passwordErr").innerHTML = "";
          document.getElementById("passwordErr").style.color = "red";
        document.getElementById("password").style.borderColor = "green";
      }
        }


         function changePass(){
          if (document.getElementById("npassword").value == "") {
          document.getElementById("npasswordErr").innerHTML = "Password must be Filled-Up";
          document.getElementById("npasswordErr").style.color = "red";
          document.getElementById("npassword").style.borderColor = "red";
      }else if(document.getElementById("npassword").value.length<8){
          document.getElementById("npassword").style.borderColor = "red";
          document.getElementById("npasswordErr").style.color = "red";
        document.getElementById("npasswordErr").innerHTML = "Password must be at least 8 characters long.";
     }
     else if(document.getElementById("npassword").value.search(/[!\@\#\$\%]/)==-1){
          document.getElementById("npassword").style.borderColor = "red";
          document.getElementById("npasswordErr").style.color = "red";
        document.getElementById("npasswordErr").innerHTML = "Password must have one special characters (@,#,$,%)!.";
     }
     else if(document.getElementById("npassword").value === document.getElementById("password").value){
          document.getElementById("npassword").style.borderColor = "red";
          document.getElementById("npassword").style.color = "red";
        document.getElementById("npasswordErr").innerHTML = "Old password and new Password can't be same!";
      }
       else{
        document.getElementById("npasswordErr").innerHTML = "";
          document.getElementById("npassword").style.color = "red";
        document.getElementById("npassword").style.borderColor = "green";
      }
        }

 

        function confirmPass(){
          if (document.getElementById("confirmpassword").value == "") {
          document.getElementById("confirmpasswordErr").innerHTML = "Retype the Password";
          document.getElementById("confirmpasswordErr").style.color = "red";
          document.getElementById("confirmpassword").style.borderColor = "red";
      }else if(document.getElementById("confirmpassword").value != document.getElementById("password").value){
          document.getElementById("confirmpassword").style.borderColor = "red";
          document.getElementById("confirmpasswordErr").style.color = "red";
        document.getElementById("confirmpasswordErr").innerHTML = "Both Passwords must be same!";
      }
        else {
        document.getElementById("confirmpasswordErr").innerHTML = "";
          document.getElementById("confirmpasswordErr").style.color = "red";
        document.getElementById("confirmpassword").style.borderColor = "green";
      }

 

        }
          
    function checkDOB() {
      if (document.getElementById("birth").value == "") {
          document.getElementById("birthErr").innerHTML = "Date of Birth must be Filled-Up";
          document.getElementById("birthErr").style.color = "red";
          document.getElementById("birth").style.borderColor = "red";
      }
      else{
        document.getElementById("birthErr").innerHTML = "";
          document.getElementById("birthErr").style.color = "red";
        document.getElementById("birth").style.borderColor = "green";
      }
        }

 

      function checkGender() {
      if (document.getElementById("gender").value == "") {
          document.getElementById("genderErr").innerHTML = "Date of Birth must be Filled-Up";
          document.getElementById("genderErr").style.color = "red";
          document.getElementById("gender").style.borderColor = "red";
      }
      else{
        document.getElementById("genderErr").innerHTML = "";
          document.getElementById("genderErr").style.color = "red";
        document.getElementById("gender").style.borderColor = "green";
      }
        }


         function retypePass(){
          if (document.getElementById("rnpassword").value == "") {
          document.getElementById("rnpasswordErr").innerHTML = "Retype the Password";
          document.getElementById("rnpasswordErr").style.color = "red";
          document.getElementById("rnpassword").style.borderColor = "red";
      }else if(document.getElementById("rnpassword").value != document.getElementById("npassword").value){
          document.getElementById("rnpassword").style.borderColor = "red";
          document.getElementById("rnpasswordErr").style.color = "red";
        document.getElementById("rnpasswordErr").innerHTML = "Both Passwords must be same!";
      }
        else {
        document.getElementById("rnpasswordErr").innerHTML = "";
          document.getElementById("rnpasswordErr").style.color = "red";
        document.getElementById("rnpassword").style.borderColor = "green";
      }

 

        }
          

 

     