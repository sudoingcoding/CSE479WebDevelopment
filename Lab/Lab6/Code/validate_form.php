<?php
// Database connection
$host = "localhost";
$username = "root";
$password = ""; // Set your MySQL root password here
$dbname = "SignupFormDB";

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Initialize error messages
$errors = [];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $nid = htmlspecialchars(trim($_POST['nid']));
    $dob = htmlspecialchars(trim($_POST['dob']));
    $email = htmlspecialchars(trim($_POST['email']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $mobile = htmlspecialchars(trim($_POST['contact_number']));
    $address = htmlspecialchars(trim($_POST['address']));
    $blood_type = htmlspecialchars(trim($_POST['blood_type']));
    $height = floatval($_POST['height']);
    $weight = floatval($_POST['weight']);
    $donated = htmlspecialchars(trim($_POST['donated_blood_before']));
    $allergy = htmlspecialchars(trim($_POST['allergy_details'] ?? ''));
    $disease = htmlspecialchars(trim($_POST['serious_disease_history'] ?? ''));
    $anemia = htmlspecialchars(trim($_POST['anemia']));
    $cardiac = htmlspecialchars(trim($_POST['cardiac_patient']));
    $medication = htmlspecialchars(trim($_POST['under_medication']));
    $password = htmlspecialchars(trim($_POST['password']));
    $confirm_password = htmlspecialchars(trim($_POST['confirm_password']));

    // Validate inputs
    if (strlen($name) < 4 || strlen($name) > 50) {
        $errors['name'] = "Name must be between 4 and 50 characters.";
    }

    if (!preg_match("/^\d{10,17}$/", $nid)) {
        $errors['nid'] = "NID must be between 10 and 17 digits.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format.";
    }

    if (!preg_match("/^\+8801[3-9]\d{8}$/", $mobile)) {
        $errors['contact_number'] = "Invalid Bangladeshi contact number format.";
    }

    if (empty($blood_type)) {
        $errors['blood_type'] = "Please select a blood type.";
    }

    if ($password !== $confirm_password) {
        $errors['confirm_password'] = "Passwords do not match.";
    }

    if (strlen($password) < 8 || strlen($password) > 20) {
        $errors['password'] = "Password must be between 8 and 20 characters.";
    }

    // Check for duplicate NID and DOB in the database
    $stmt = $conn->prepare("SELECT * FROM Users WHERE nid = ? AND dob = ?");
    $stmt->bind_param("ss", $nid, $dob);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        header("Location: already_donor.html");
        exit();
    }

    // If no errors, insert data into the database
    if (empty($errors)) {
        $password_hash = password_hash($password, PASSWORD_BCRYPT); // Hash the password

        $stmt = $conn->prepare("
        INSERT INTO Users 
        (name, nid, dob, email, gender, mobile, address, blood_type, height, weight, donated, allergy_details, serious_disease_history, anemia, cardiac, medication, password_hash) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param(
            "ssssssssddsssssss",
            $name, $nid, $dob, $email, $gender, $mobile, $address, $blood_type, 
            $height, $weight, $donated, $allergy, $disease, $anemia, $cardiac, 
            $medication, $password_hash
        );

        if ($stmt->execute()) {
            header("Location: success_donor.html");
            exit();
        } else {
            $errors['database'] = "Error inserting data: " . $stmt->error;
        }
    }
}

// Display errors
foreach ($errors as $key => $error) {
    echo "<p style='color:red;'>$key: $error</p>";
}
?>
