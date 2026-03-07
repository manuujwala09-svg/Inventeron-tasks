const form = document.getElementById("form");
const captchaDisplay = document.getElementById("captchaDisplay");
const captchaInput = document.getElementById("captchaInput");
const refreshBtn = document.getElementById("refreshBtn");
const message = document.getElementById("message");

let currentCaptcha = "";

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let captcha = "";
    
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return captcha;
}

function displayCaptcha() {
    currentCaptcha = generateCaptcha();
    captchaDisplay.textContent = currentCaptcha;
    captchaInput.value = "";
    message.textContent = "";
    message.className = "";
}

refreshBtn.addEventListener("click", displayCaptcha);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const userInput = captchaInput.value.trim();
    
    if (userInput === currentCaptcha) {
        message.textContent = "✓ Verification successful!";
        message.className = "success";
        
        setTimeout(() => {
            alert("Form submitted successfully!");
            form.reset();
            displayCaptcha();
        }, 500);
    } else {
        message.textContent = "✗ Captcha doesn't match. Try again.";
        message.className = "error";
        displayCaptcha();
    }
});

// Initialize captcha on page load
displayCaptcha();
