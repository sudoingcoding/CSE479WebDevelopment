// // Form Validation
// document.getElementById('donorForm').addEventListener('submit', function (event) {
//     let isValid = true;
//     let alertMessages = []; // Collect error messages

//     // Name Validation
//     const name = document.getElementById('name').value.trim();
//     const nameRegex = /^[A-Za-z]+(\s[A-Za-z]+)+$/;
//     if (!nameRegex.test(name) || name.length < 4 || name.length > 25) {
//         const message = "Name must be 4-25 characters and include a first and last name.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // Email Validation
//     const email = document.getElementById('email').value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         const message = "Invalid email format.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // NID Validation
//     const nid = document.getElementById('nid').value.trim();
//     const nidRegex = /^\d{10,17}$/;
//     if (!nidRegex.test(nid)) {
//         const message = "Invalid NID format.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // Date of Birth Validation
//     const dob = new Date(document.getElementById('dob').value);
//     const age = new Date().getFullYear() - dob.getFullYear();
//     if (isNaN(dob.getTime()) || age < 18) {
//         const message = "You must be at least 18 years old.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // Contact Number Validation
//     const contactNumber = document.getElementById('contact_number').value.trim();
//     const contactRegex = /^(\+8801[3-9]\d{8})$/;
//     if (!contactRegex.test(contactNumber)) {
//         const message = "Invalid Bangladeshi contact number.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // Password Validation
//     const password = document.getElementById('password').value.trim();
//     const confirmPassword = document.getElementById('confirm_password').value.trim();
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
//     if (!passwordRegex.test(password)) {
//         const message = "Password must be 8-20 characters with at least one uppercase letter, one lowercase letter, and one number.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     if (password !== confirmPassword) {
//         const message = "Passwords do not match.";
//         alertMessages.push(message);
//         isValid = false;
//     }

//     // Show alert if form is invalid
//     if (!isValid) {
//         event.preventDefault(); // Prevent form submission
//         alert("Please fix the following errors before submission:\n\n" + alertMessages.join("\n"));
//     }
// });

// Toggle Password Visibility
function togglePasswordVisibility(id, element) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        element.textContent = "🙈"; // Hide icon
    } else {
        input.type = "password";
        element.textContent = "👁️"; // Show icon
    }
}
