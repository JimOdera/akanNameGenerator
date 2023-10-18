function calculateDayOfWeek(day, month, year) {
    // Create a new Date object based on the user's input
    const calculatedDate = new Date(year, month - 1, day);

    // Create an array for the Akan day names
    // const akanDayNames = [
    //     "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    // ];

    // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
    const dayOfWeek = calculatedDate.getDay();

    // Determine the Akan name based on the day of the week
    // const akanName = akanDayNames[dayOfWeek];

    return dayOfWeek;
}





const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


// This is a simplified example to get you started. You can integrate this with your existing JavaScript code.

document.getElementById("akan-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to see the result.

    const day = parseInt(document.getElementById("birth-day").value);
    const month = parseInt(document.getElementById("birth-month").value);
    const year = parseInt(document.getElementById("birth-year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Call the function to calculate the day of the week.
    const dayOfWeek = calculateDayOfWeek(day, month, year);

    // Call the function to determine the Akan name.
    const akanName = getAkanName(gender, dayOfWeek);

    // Display the result to the user.
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your Akan name is ${akanName}`;
});

function getAkanName(gender, dayOfWeek) {
    if (gender === "male") {
        return maleAkanNames[dayOfWeek];
    } else if (gender === "female") {
        return femaleAkanNames[dayOfWeek];
    }
}
