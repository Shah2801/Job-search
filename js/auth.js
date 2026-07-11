// Signup

const signupForm=document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("signupEmail").value;

const password=document.getElementById("signupPassword").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match!");

return;

}

const user={

name,

email,

password

};

localStorage.setItem("user",JSON.stringify(user));

alert("Account Created Successfully!");

window.location="login.html";

});

}

// Login

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const user=JSON.parse(localStorage.getItem("user"));

if(user && user.email===email && user.password===password){

alert("Login Successful!");

window.location="dashboard.html";

}else{

alert("Invalid Email or Password");

}

});

}