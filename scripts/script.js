const fname = document.querySelector("#fname");
const fname_error = document.querySelector("#fname_error");

const lname = document.querySelector("#lname");
const lname_error = document.querySelector("#lname_error");

const email = document.querySelector("#email");
const email_error = document.querySelector("#email_error");

const pass = document.querySelector("#pass");
const pass_error = document.querySelector("#pass_error");

const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    checkFname();
    checkLname();
    checkEmail(email);
    checkPass();
})

const checkFname = function () {
    const x = fname.value;
    if (x === "") {
        fname.classList.add("fname");
        fname_error.classList.remove("valid");
        fname_error.classList.add("error");
        fname_error.innerText = "First Name Cannot be empty";
    }
    else {
        fname.classList.remove("fname");
        fname_error.classList.remove("error");
        fname_error.classList.add("valid");
    }
}

const checkLname = function () {
    const x = lname.value;
    if (x === "") {
        lname.classList.add("lname");
        lname_error.classList.remove("valid");
        lname_error.classList.add("error");
        lname_error.innerText = "Last Name Cannot be empty";
    }
    else {
        lname.classList.remove("lname");
        lname_error.classList.remove("error");
        lname_error.classList.add("valid");
    }
}

const checkEmail = function () {
    let x = email.value;

    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (x.match(mailformat)) {
        email.classList.remove("email");
        email_error.classList.remove("emailError");
        email_error.classList.add("valid");
        email.style.color = "#000";
    }
    else {
        email.classList.add("email");
        email_error.classList.remove("valid");
        email_error.classList.add("emailError");
        email_error.innerText = "Looks like this is not an Email";
        email.style.color = "hsl(0, 100%, 74%)";
    }
}

const checkPass = function () {
    const x = pass.value;
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if (x === "") {
        pass.classList.add("pass");
        pass_error.classList.remove("valid");
        pass_error.classList.add("error");
        pass_error.innerText = "Password Cannot be empty";
        return false;
    }
    if (!x.match(upperCaseLetters)) {
        pass.classList.add("pass");
        pass_error.classList.remove("valid");
        pass_error.classList.add("error");
        pass_error.innerText = "Password must contain Uppercase";
        return false;
    }
    if (!x.match(numbers)) {
        pass.classList.add("pass");
        pass_error.classList.remove("valid");
        pass_error.classList.add("error");
        pass_error.innerText = "Password must contain numbers";
        return false;
    }
    if (x.length < 8) {
        pass.classList.add("pass");
        pass_error.classList.remove("valid");
        pass_error.classList.add("error");
        pass_error.innerText = "Password must be longer than 8 chars"
        return false;
    }
    if (!x.match(lowerCaseLetters)) {
        pass.classList.add("pass");
        pass_error.classList.remove("valid");
        pass_error.classList.add("error");
        pass_error.innerText = "Password must contain Lowercase"
        return false;
    } else {
        pass.classList.remove("pass");
        pass_error.classList.remove("error");
        pass_error.classList.add("valid");
    }
}



