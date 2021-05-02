const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const subectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

function formValidation(event) {
    event.preventDefault();

    if (fullName.trim().value.length > 0) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (subject.trim().value.length >= 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (address.trim().value.length >= 25) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    console.log(submitted);
}

form.addEventListener("submit", formValidation);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}