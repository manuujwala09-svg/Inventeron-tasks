
const detailsForm = document.getElementById("detailsForm");

if (detailsForm) {
    detailsForm.addEventListener("submit", function (e) {
        e.preventDefault();  
        window.location.href = "captcha.html";  
    });
}



const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const submitCaptcha = document.getElementById("submitCaptcha");

let generatedCaptcha = "";


if (captchaText) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 5; i++) {
        generatedCaptcha += chars[Math.floor(Math.random() * chars.length)];
    }

    captchaText.textContent = generatedCaptcha;
}


if (submitCaptcha) {
    submitCaptcha.addEventListener("click", function () {
        if (captchaInput.value === generatedCaptcha) {
            alert("Submitted successfully");
        } else {
            alert("Invalid captcha");
        }
    });
}
