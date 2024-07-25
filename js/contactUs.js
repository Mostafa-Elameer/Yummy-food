export class ContactUs {
    constructor() {
        document.querySelectorAll(".S-imput").forEach((inpt) => {
            inpt.addEventListener("keyup", () => {
                this.att = inpt.getAttribute("data-validiton");
                this.inputsValidation();
            });
        });
    }

    inputsValidation() {
        const nameValid = this.att === "name" && this.nameValidation();
        const emailValid = this.att === "email" && this.emailValidation();
        const phoneValid = this.att === "phone" && this.phoneValidation();
        const ageValid = this.att === "age" && this.ageValidation();
        const passValid = this.att === "pass" && this.passwordValidation();
        const repassValid = this.att === "repass" && this.repasswordValidation();

        const nameAlert = document.getElementById("nameAlert");
        if (nameAlert) {
            nameAlert.classList.toggle("d-none", nameValid);
        }

        const emailAlert = document.getElementById("emailAlert");
        if (emailAlert) {
            emailAlert.classList.toggle("d-none", emailValid);
        }

        const phoneAlert = document.getElementById("phoneAlert");
        if (phoneAlert) {
            phoneAlert.classList.toggle("d-none", phoneValid);
        }

        const ageAlert = document.getElementById("ageAlert");
        if (ageAlert) {
            ageAlert.classList.toggle("d-none", ageValid);
        }

        const passwordAlert = document.getElementById("passwordAlert");
        if (passwordAlert) {
            passwordAlert.classList.toggle("d-none", passValid);
        }

        const repasswordAlert = document.getElementById("repasswordAlert");
        if (repasswordAlert) {
            repasswordAlert.classList.toggle("d-none", repassValid);
        }

        const submitBtn = document.getElementById("submitBtn");
        if (submitBtn) {
            if (nameValid && emailValid && phoneValid && ageValid && passValid && repassValid) {
                submitBtn.classList.add("active");
                submitBtn.classList.remove("disabled");
            } else {
                submitBtn.classList.remove("disabled");
                submitBtn.classList.add("active");
            }
        }
    }

    nameValidation() {
        const nameInput = document.getElementById("nameInput");
        return nameInput && /^[a-zA-Z ]+$/.test(nameInput.value);
    }

    emailValidation() {
        const emailInput = document.getElementById("emailInput");
        return emailInput && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value);
    }

    phoneValidation() {
        const phoneInput = document.getElementById("phoneInput");
        return phoneInput && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value);
    }

    ageValidation() {
        const ageInput = document.getElementById("ageInput");
        return ageInput && /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(ageInput.value);
    }

    passwordValidation() {
        const passwordInput = document.getElementById("passwordInput");
        return passwordInput && /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(passwordInput.value);
    }

    repasswordValidation() {
        const passwordInput = document.getElementById("passwordInput");
        const repasswordInput = document.getElementById("repasswordInput");
        return passwordInput && repasswordInput && repasswordInput.value === passwordInput.value;
    }
}
