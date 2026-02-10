// Get elements
const password = document.getElementById('password');
const strengthText = document.getElementById('strength-text');
const strengthFill = document.getElementById('strength-fill');

const lengthRule = document.getElementById("length");
const uppercaseRule = document.getElementById("uppercase");
const numberRule = document.getElementById("number");
const symbolRule = document.getElementById("symbol");

const toggle = document.getElementById("toggle");

// Show/hide password toggle
toggle.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        toggle.textContent = "🙈";
    } else {
        password.type = "password";
        toggle.textContent = "👁️";
    }
});

// Password input event
password.addEventListener('input', () => {
    const value = password.value;
    let strength = 0;

    // Check length
    if (value.length >= 8) {
        lengthRule.textContent = "✓ At least 8 characters";
        lengthRule.className = "valid";
        strength++;
    } else {
        lengthRule.textContent = "✗ At least 8 characters";
        lengthRule.className = "invalid";
    }

    // Check uppercase letters
    if (/[A-Z]/.test(value)) {
        uppercaseRule.textContent = "✓ Contains uppercase letter";
        uppercaseRule.className = "valid";
        strength++;
    } else {
        uppercaseRule.textContent = "✗ Contains uppercase letter";
        uppercaseRule.className = "invalid";
    }

    // Check numbers
    if (/[0-9]/.test(value)) {
        numberRule.textContent = "✓ Contains number";
        numberRule.className = "valid";
        strength++;
    } else {
        numberRule.textContent = "✗ Contains number";
        numberRule.className = "invalid";
    }

    // Check symbols
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        symbolRule.textContent = "✓ Contains symbol";
        symbolRule.className = "valid";
        strength++;
    } else {
        symbolRule.textContent = "✗ Contains symbol";
        symbolRule.className = "invalid";
    }

    // Update strength text
    if (strength <= 1) {
        strengthText.textContent = "Weak Password";
        strengthText.className = "weak";
    } else if (strength === 2 || strength === 3) {
        strengthText.textContent = "Moderate Password";
        strengthText.className = "moderate";
    } else if (strength === 4) {
        strengthText.textContent = "Strong Password";
        strengthText.className = "strong";
    }

    // Update strength bar
    const width = (strength / 4) * 100;  // calculate width
    strengthFill.style.width = width + "%";
    strengthFill.style.background = getBarColor(strength);
});

// Gradient colors for strength bar
function getBarColor(strength) {
    switch(strength){
        case 1: return "linear-gradient(to right, #ff4b5c, #ff6f61)"; // weak
        case 2: return "linear-gradient(to right, #ffa500, #ffcc00)"; // medium
        case 3: return "linear-gradient(to right, #ffa500, #ffcc00)"; // medium
        case 4: return "linear-gradient(to right, #00b894, #55efc4)"; // strong
        default: return "#eee";
    }
}
