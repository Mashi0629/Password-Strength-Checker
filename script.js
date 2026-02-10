const password = document.getElementById('password');
const strenghText = document.getElementById('strength-text');

const lengthRule = document.getElementById("length");
const uppercaseRule = document.getElementById("uppercase");
const numberRule = document.getElementById("number");
const symbolRule = document.getElementById("symbol");

password.addEventListener('input', () => {
    const value = password.value;
    let strength = 0;

    // Check length
    if (value.length >= 8) {
        lengthRule.textContent = "✓ At least 8 characters";
        strength++;
        
    }
    else {
        lengthRule.textContent = "✗ At least 8 characters";
    }
    // Check uppercase letters
    if (/[A-Z]/.test(value)) {
        uppercaseRule.textContent = "✓ Contains uppercase letter";
        strength++;
    }
    else {
        uppercaseRule.textContent = "✗ Contains uppercase letter";
    }
    // Check numbers
    if (/[0-9]/.test(value)) {
        numberRule.textContent = "✓ Contains number";
        strength++;
    }
    else {
        numberRule.textContent = "✗ Contains number";
    }

    // Check symbols
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        symbolRule.textContent = "✓ Contains symbol";
        strength++;
    }
    else {
        symbolRule.textContent = "✗ Contains symbol";
    }

    //strength results
    if (strength <= 1) {
        strenghText.textContent = "Weak Password";
        strenghText.className = "weak";
    } else if (strength === 2 || strength === 3) {
        strenghText.textContent = "Moderate Password";
        strenghText.className = "moderate";
    } else if (strength === 4) {
        strenghText.textContent = "Strong Password";
        strenghText.className = "strong";
    }
});

// Strength Bar Fill Colors
function getBarColor(strength) {
    switch(strength){
        case 1: return "linear-gradient(to right, #ff4b5c, #ff6f61)"; // weak
        case 2: return "linear-gradient(to right, #ffa500, #ffcc00)"; // medium
        case 3: return "linear-gradient(to right, #ffa500, #ffcc00)"; // medium
        case 4: return "linear-gradient(to right, #00b894, #55efc4)"; // strong
        default: return "red";
    }
}

// Update strength bar
strengthFill.style.width = width + "%";
strengthFill.style.background = getBarColor(strength);


const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        toggle.textContent = "🙈";
    } else {
        password.type = "password";
        toggle.textContent = "👁️";
    }
});

