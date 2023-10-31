function validateForm(){
    const field1 = document.getElementById("user_password");
    const field2 = document.getElementById("confirm_password");

    if(field1.value===field2.value){
        alert("Submitting form....");
    }else{
        alert("Please Check That Passwords Match");
    }
}