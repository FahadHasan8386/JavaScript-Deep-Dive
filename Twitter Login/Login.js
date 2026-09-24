// Get elements

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signinBtn = document.getElementById("signinBtn");

const togglePassword =
    document.getElementById("togglePassword");


// Show / Hide Password

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";
    }

});


// Check input fields

function checkInputs() {

    if (
        emailInput.value.trim() !== "" &&
        passwordInput.value.trim() !== ""
    ) {

        signinBtn.disabled = false;

    } else {

        signinBtn.disabled = true;

    }

}


// When user types

emailInput.addEventListener("input", checkInputs);

passwordInput.addEventListener("input", checkInputs);