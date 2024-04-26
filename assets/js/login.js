const userInputAccount = document.getElementById("login-input-account");
const userInputPassword = document.getElementById("login-input-passwd");
const btnLogin = document.getElementById("btn-login");
const transFormSignUp = document.getElementById("signup-link-form");
const transFormLogin = document.getElementById("login-link-form");
const formLogin = document.querySelector(".form-login");
const formSignup = document.querySelector(".form-signup");

function getLengthAccount(account) {
    return account.length;
}

transFormSignUp.addEventListener("click", function() {
    formLogin.style.display = "none";
    formSignup.style.display = "flex";
});

transFormLogin.addEventListener("click", function() {
    formLogin.style.display = "flex";
    formSignup.style.display = "none";
})

btnLogin.addEventListener("click", function() {
    if (getLengthAccount(userInputAccount.value) > 20) {
        alert("Username is too long. Please try again");
        return;
    }

    if (userInputAccount.value === "admin" || userInputPassword.value === "admin") {
        alert("Login Success");
    }
});

