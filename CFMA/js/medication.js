function addMedication() {
    var medicationName = document.querySelector('[name="medication"]').value;
    var startDate = document.querySelector('[name="date"]').value;
    var time = document.querySelector('[name="time"]').value;

    var displayContainer = document.getElementById("addedMedications");

    // Create a new element to display the added medication
    var medicationDisplay = document.createElement("div");
    medicationDisplay.innerHTML = "<p>Medication: " + medicationName + "<br>Start Date: " + startDate + "<br>Time: " + time + "</p>";

    // Append the new element to the display container
    displayContainer.appendChild(medicationDisplay);
}