const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const fullname = document.querySelector("#fullname");

let arr;
const data = JSON.parse(localStorage.getItem('register'));
if(data === null){
    arr = [];
}else{
    arr = data;
}
form.addEventListener("submit" , (event) =>{
    event.preventDefault()
    const checkEmail = arr.some((index)=> {
        return  index.EMAIL === email.value 
    })
    if(checkEmail){
        alert("Email already exists!")
        return
    }
    const obj ={
        EMAIL : email.value,
        PASSWORD : password.value 
    }
    arr.push(obj)
    localStorage.setItem('register' , JSON.stringify(arr));
})