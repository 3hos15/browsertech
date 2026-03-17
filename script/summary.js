// Get container and data
const container = document.getElementById("summaryContent");
const data = JSON.parse(localStorage.getItem("erfbelastingData"));

// Function to create a section
function createSection(title, obj) {
  // Create a section element
    const section = document.createElement("section");

  // Create and append a title
    const h2 = document.createElement("h2");
    h2.textContent = title;
    section.appendChild(h2);

  // Loop through each key-value in the object
    for (let key in obj) {
    const p = document.createElement("p");
    p.textContent = key + ": " + obj[key];
    section.appendChild(p);
    }

  // Add section to container
    container.appendChild(section);
}

// Call the function for each part of the data
createSection("Gegevens van de overledene", data.overledene);
createSection("Huwelijkse of partnerschapsvoorwaarden", data.huwelijk);
createSection("Kinderen overledene", data.kinderen);
createSection("Gegevens notaris", data.notaris);
createSection("Datum van het testament of van de laatste wijziging", data.testament);