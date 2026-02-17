console.log("yooo");

const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prevbutton");
const nextBtn = document.getElementById("nextbutton");
const submitBtn = document.getElementById("submitbutton");

let currentStep = 0;

function showStep(index) {

    for (var i = 0; i < steps.length; i++) {

    steps[i].classList.remove("active");

    if (i === index) {
    steps[i].classList.add("active");
    }
    }

if (index === 0) {
    prevBtn.disabled = true;
    } else {
    prevBtn.disabled = false;
    }

if (index === steps.length - 1) {
nextBtn.style.display = "none";
submitBtn.style.display = "inline-block";
    } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
    } 
}


nextBtn.addEventListener("click", function () {
    if (currentStep < steps.length - 1) {
    currentStep = currentStep + 1;
    showStep(currentStep);
    }
});


prevBtn.addEventListener("click", function () {
    if (currentStep > 0) {
    currentStep = currentStep - 1;
    showStep(currentStep);
    }
});

showStep(currentStep);
