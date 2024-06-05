const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
// const fullname = document.querySelector("#fullname")

const arr = [];
form.addEventListener("submit" , (event) =>{
    event.preventDefault()
    console.log(email.value)
    console.log(password.value)
})