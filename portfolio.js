const contact=document.getElementById("contactForm");
const nameError=document.getElementById("name_error");
const mailError=document.getElementById("mail_error");
const messageError=document.getElementById("message_error");



document.getElementById("Submit").addEventListener("click",function(e){
e.preventDefault();

const nameInput=document.getElementById("Name").value.trim();
const emailInput=document.getElementById("Email").value.trim();
const messageInput=document.getElementById("Message").value.trim();

nameError.innerText="";
mailError.innerText="";
messageError.innerText="";

if (nameInput==""){
nameError.innerText="Invalid Name";
}
if(emailInput=="" || !emailInput.includes("@")){
mailError.innerText="Invalid Email";
}
if(messageInput==""){
messageError.innerText="Invalid Message";
}
if(nameInput!="" && emailInput!="" && emailInput.includes("@") && messageInput!=""){
    alert("Form Submitted Successfully!");
    document.getElementById("Name").value="";
    document.getElementById("Email").value="";
    document.getElementById("Message").value="";
}
})


