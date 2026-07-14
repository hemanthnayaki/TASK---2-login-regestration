// ================================
// Show / Hide Password
// ================================

function togglePassword(id, button) {

    const input = document.getElementById(id);
    const icon = button.querySelector("i");

    if (input.type === "password") {

        input.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");

    } else {

        input.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");

    }

}

// ================================
// Login Validation
// ================================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value.trim();

if(email==="" || password===""){

alert("Please fill all fields.");

return;

}

alert("Login Successful!");

this.reset();

});

}

// ================================
// Registration Validation
// ================================

const registerForm=document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("fullName").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

const terms=document.getElementById("terms").checked;

// Name

if(name.length<3){

alert("Name should contain minimum 3 characters.");

return;

}

// Email

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Invalid Email");

return;

}

// Phone

const phonePattern=/^[6-9][0-9]{9}$/;

if(!phone.match(phonePattern)){

alert("Enter valid mobile number.");

return;

}

// Password

if(password.length<6){

alert("Password should be minimum 6 characters.");

return;

}

// Match Password

if(password!==confirm){

alert("Passwords do not match.");

return;

}

// Checkbox

if(!terms){

alert("Accept Terms & Conditions.");

return;

}

document.getElementById("registerSuccess").classList.remove("d-none");

this.reset();

});

}

// ================================
// Live Password Match
// ================================

const confirmPassword=document.getElementById("confirmPassword");

if(confirmPassword){

confirmPassword.addEventListener("keyup",function(){

const password=document.getElementById("password").value;

const message=document.getElementById("passwordMessage");

if(this.value===""){

message.innerHTML="";

return;

}

if(password===this.value){

message.innerHTML="Passwords Match";

message.style.color="green";

}

else{

message.innerHTML="Passwords Not Match";

message.style.color="red";

}

});

}

// ================================
// Scroll To Top
// ================================

const scrollBtn=document.getElementById("scrollTop");

if(scrollBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}

else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

// ================================
// Reveal Animation
// ================================

window.addEventListener("scroll",reveal);

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight=window.innerHeight;

const elementTop=reveals[i].getBoundingClientRect().top;

const elementVisible=100;

if(elementTop<windowHeight-elementVisible){

reveals[i].classList.add("active");

}

}

}

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ================================
// Loader
// ================================

window.onload=function(){

const loader=document.querySelector(".loader");

if(loader){

loader.style.display="none";

}

};

// ================================
// Dark Mode Toggle
// ================================

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("bg-dark");

document.body.classList.toggle("text-white");

});

}

// ================================
// AJAX Email Check
// ================================

const email=document.getElementById("email");

if(email){

email.addEventListener("keyup",()=>{

fetch("php/checkUser.php?email="+email.value)

.then(response=>response.text())

.then(data=>{

document.getElementById("emailStatus").innerHTML=data;

});

});

}