document.getElementById("generateBtn").addEventListener("click", function() {
    // Get input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate input
    if (!day || !month || !year || !gender) {
        document.getElementById("result").innerHTML = "Please fill in all fields.";
        return;
    }

    // Validate actual date
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        document.getElementById("result").innerHTML = "Invalid date entered.";
        return;
    }

    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

    // Akan names
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Select name based on gender
    const akanName = (gender.value === "male") ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    // Display result
    document.getElementById("result").innerHTML =
        `You were born on <strong>${days[dayOfWeek]}</strong>. Your Akan name is <strong>${akanName}</strong>.`;
});
