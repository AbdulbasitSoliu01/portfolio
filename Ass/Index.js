const form = document.getElementById("form")
const tel1 = document.getElementById("phone")
const tel2 = document.getElementById("phone1")
const message_container = document.getElementById("message_container")
const message = document.getElementById("message")
let isValid = false;
let phoneMatch = false;
// validate form
function validateForm() {
    isValid= form.checkValidity();  
    if(!isValid) {
        message.textContent = "Please, fill out the form.";
        message_container.style.backgroundColor = "red"
        message.style.color = "white"
        return
    }
    //phone manager
    if(tel1.value === tel2.value) {
        phoneMatch = true;
        tel1.style.borderColor = "green"
        tel2.style,borderColor = "green"
    }else{
        phoneMatch = false;
        message.textContent = "Please, check your phone number."
        message_container.style.backgroundColor = "red"
        message.style.color = "white"
        tel1.style.borderColor = "red"
        tel2.style.borderColor = "red"
        return;
    }
    if(isValid && phoneMatch){
        message.textContent = "Thanks For Dropping A Message."
        message_container.style.backgroundColor = "red"
        message.style.color = "white"

    }
}

function storeuser(){
  const user = {
    name: form.name.value,
    email: form.email.value,
    phone1: form.phone1.value,
    phone2: form.phone2.value,
    message: form.message.value,
  };
  console.log(user);
}


function processFormData(event){
    event.preventDefault();
    validateForm();
    storeuser();
}
form.addEventListener("submit", processFormData)