function addDosage() {
    var medicationName = document.querySelector('[name="medication"]').value;
    var dosage = document.querySelector('[name="dosage"]').value;
    var time = document.querySelector('[name="time"]').value;

    var displayContainer = document.getElementById("dosageTableBody");

    // Create a new row for the dosage entry
    var dosageRow = document.createElement("tr");

    // Add cells for each column
    var medicationCell = document.createElement("td");
    medicationCell.textContent = medicationName;
    dosageRow.appendChild(medicationCell);

    var dosageCell = document.createElement("td");
    dosageCell.textContent = dosage;
    dosageRow.appendChild(dosageCell);

    var timeCell = document.createElement("td");
    timeCell.textContent = time;
    dosageRow.appendChild(timeCell);

    // Repeat the image based on the dosage count
    var imageCell = document.createElement("td");
    for (var i = 0; i < parseInt(dosage); i++) {
        var pillImage = document.createElement("img");
        pillImage.src = "images/icon/pill.png";
        pillImage.alt = "Pill";
        pillImage.width = 50;
        pillImage.height = 50;
        imageCell.appendChild(pillImage);
    }
    dosageRow.appendChild(imageCell);

    // Append the new row to the display container
    displayContainer.appendChild(dosageRow);
}
