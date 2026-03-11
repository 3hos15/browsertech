const container = document.getElementById("summaryContent");
const data = JSON.parse(sessionStorage.getItem("erfbelastingData"));

function createSection(title, obj) {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = title;
    section.appendChild(h2);

    for (const [key, value] of Object.entries(obj)) {
        const p = document.createElement("p");
        p.textContent = key + ": " + value;
        section.appendChild(p);
    }

    container.appendChild(section);
}

createSection("Gegevens van de overledene", data.overledene);
createSection("Huwelijk / partnerschap", data.huwelijk);
createSection("Kinderen overledene", data.kinderen);
createSection("Gegevens notaris", data.notaris);
createSection("Testament overledene", data.testament);
