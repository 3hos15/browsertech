const form = document.getElementById("erfbelastingForm");

if (form) {
form.addEventListener("submit", function(e) {
    e.preventDefault();

const data = {
    overledene: {
        "Voornaam": form.querySelector("input[name='voornaam']").value,
        "Tussenvoegsel(s)": form.querySelector("input[name='tussenvoegsel']").value,
        "Achternaam": form.querySelector("input[name='achternaam']").value,
        "BSN": form.querySelector("input[name='bsn']").value,
        "Overlijdensdatum": form.querySelector("input[name='overlijdensdatum']").value
    },

    huwelijk: {
        "Was de overledene getrouwd of had de overledene een geregistreerde partner op het moment van overlijden?": form.querySelector("input[name='getrouwd']:checked")?.value || "",
        "Hadden de overledene en diens echtgenoot of geregistreerde partner huwelijkse of partnerschapsvoorwaarden laten vastleggen in een notariële akte?": form.querySelector("input[name='akte']:checked")?.value || "",
        "Hadden de overledene en diens partner een finaal verrekenbeding?": form.querySelector("input[name='verrekenbeding']:checked")?.value || "",



        "Dag": form.querySelector("input[name='dagpartnerschapsvoorwaarden']").value,
        "Maand": form.querySelector("input[name='maandpartnerschapsvoorwaarden']").value,
        "Jaar": form.querySelector("input[name='jaarpartnerschapsvoorwaarden']").value
    },

    kinderen: {
        "Had de overledene kinderen?": form.querySelector("input[name='kinderen']:checked")?.value || "",
        "Is 1 van deze kinderen eerder overleden dan de overledene voor wie u nu aangifte doet?": form.querySelector("input[name='eerderoverleden']:checked")?.value || "",
        "Had dit overleden kind zelf kinderen?": form.querySelector("input[name='kindkind']:checked")?.value || ""
    },

    testament: {
        "Had de overledene een testament?": form.querySelector("input[name='testament']:checked")?.value || "",
        "Dag": form.querySelector("input[name='dagtestament']").value,
        "Maand": form.querySelector("input[name='maandtestament']").value,
        "Jaar": form.querySelector("input[name='jaartestament']").value
    },

    notaris: {
        "Protocolnummer": form.querySelector("input[name='Protocolnummer']").value,
        "Voornaam": form.querySelector("input[name='voornaamnotaris']").value,
        "Tussenvoegsel(s)": form.querySelector("input[name='tussenvoegselnotaris']").value,
        "Achternaam": form.querySelector("input[name='achternaamnotaris']").value,
        "Vestigingsplaats": form.querySelector("input[name='steden-lijst']")?.value || ""    }
};

// sessionStorage.setItem("erfbelastingData", JSON.stringify(data));
localStorage.setItem("erfbelastingData", JSON.stringify(data));
    window.location.href = "samenvatting.html";
});
}