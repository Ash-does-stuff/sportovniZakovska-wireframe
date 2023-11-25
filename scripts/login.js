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
    if (nameInput.value == "student" && passwordInput.value == "student") {
        window.location.replace("./sites/studentPage-atletika.html");
    } else if (nameInput.value == "ucitel" && passwordInput.value == "ucitel") {
        window.location.replace("./sites/teacherPage.html");
    }
    else {
        invalidDetailsText.style.visibility = "visible" ;
    }
}