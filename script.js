const form=document.querySelector("form"),
 emailField=form.querySelector(".email-field"),
 emailInput=emailField.querySelector(".email"),
 passField=form.querySelector(".create-password"),
 passInput=passField.querySelector(".password"),
 cPassField=form.querySelector(".confirm-password"),
 cPassInput=cPassField.querySelector(".cPassword");

 /*
 Regex pattern
 const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 const passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  */

 //email validaton
 function checkEmail(){
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)){
       return emailField.classList.add("invalid");   
    }else
    emailField.classList.remove("invalid");
 }
 //hide and show password
 const eyeIcons=document.querySelectorAll(".show-hide");
 eyeIcons.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click",() =>{
        const pInput=eyeIcon.parentElement.querySelector("input");
        //eyeIcon.classList.replace("fa-eye-slash","fa-eye");
        if(pInput.type==="password"){
            eyeIcon.classList.replace("fa-eye-slash","fa-eye");
            return pInput.type="text";
        }else
            eyeIcon.classList.replace("fa-eye","fa-eye-slash");
            pInput.type="password"; 
    });
 });

 //Password validation
 function createPass(){
    const passPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passInput.value.match(passPattern)){
       return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
 }
 //confirm password validation
 function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
       return cPassField.classList.add("invalid");
    }
       cPassField.classList.remove("invalid");
 }

 //calling function on form submit
 form.addEventListener("submit",(e) =>{
    e.preventDefault()//preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling a funtion on key up
    emailInput.addEventListener("keyup",checkEmail);
    passInput.addEventListener("keyup",createPass);
    cPassInput.addEventListener("keyup",confirmPass);
    if(
        !emailField.classList.contains("invalid")&&
        !passField.classList.contains("invalid")&&
        !cPassField.classList.contains("invalid")) {
                location.href=form.getAttribute("action");
    }
 });
