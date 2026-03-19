const container = document.getElementById("summaryContent");
const data = JSON.parse(localStorage.getItem("erfbelastingData"));

// maakt section
function createSection(title, obj) {

    const section = document.createElement("section");


    const h2 = document.createElement("h2");
    h2.textContent = title;
    section.appendChild(h2);

  // pakt key value van de objecten 
    for (let key in obj) {
    const p = document.createElement("p");
    p.textContent = key + ": " + obj[key];
    section.appendChild(p);
    }

  // section toevoegen
    container.appendChild(section);
}

// functie roepen voor section
createSection("Gegevens van de overledene", data.overledene);
createSection("Huwelijkse of partnerschapsvoorwaarden", data.huwelijk);
createSection("Kinderen overledene", data.kinderen);
createSection("Gegevens notaris", data.notaris);
createSection("Datum van het testament of van de laatste wijziging", data.testament);