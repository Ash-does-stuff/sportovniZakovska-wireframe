let nameInput = null;
let passwordInput = null;
let invalidDetailsText = null;

window.onload = () => {
    nameInput = document.getElementById("name")
    passwordInput = document.getElementById("password")
    invalidDetailsText = document.getElementById("invalidDetails")
}

const submitDetails = () => {
    console.log(nameInput.value,passwordInput.value)
    if (nameInput.value == "admin" && passwordInput.value == "admin") {
        window.location.replace("./sites/studentPage.html");
    } else {
        invalidDetailsText.style.visibility = "visible" ;
    }
}