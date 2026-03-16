// console.log("yooo");

// const steps = document.querySelectorAll(".step");
// const prevBtn = document.getElementById("prevbutton");
// const nextBtn = document.getElementById("nextbutton");
// const submitBtn = document.getElementById("submitbutton");

// let currentStep = 0;

// function showStep(index) {

//     for (var i = 0; i < steps.length; i++) {

//     steps[i].classList.remove("active");

//     if (i === index) {
//     steps[i].classList.add("active");
//     }
//     }

// if (index === 0) {
//     prevBtn.disabled = true;
//     } else {
//     prevBtn.disabled = false;
//     }

// if (index === steps.length - 1) {
// nextBtn.style.display = "none";
// submitBtn.style.display = "inline-block";
//     } else {
//     nextBtn.style.display = "block";
//     submitBtn.style.display = "none";
//     } 
// }


// nextBtn.addEventListener("click", function () {
//     if (currentStep < steps.length - 1) {
//     currentStep = currentStep + 1;
//     showStep(currentStep);
//     }
// });


// prevBtn.addEventListener("click", function () {
//     if (currentStep > 0) {
//     currentStep = currentStep - 1;
//     showStep(currentStep);
//     }
// });

// showStep(currentStep);



// const button = document.querySelector("#checkOverledene");
// const fieldset = document.querySelector("#gegevens-overledene");

// button.addEventListener("click", () => {
//   const inputs = fieldset.querySelectorAll("input");

//   for (const input of inputs) {
//     if (!input.checkValidity()) {
//       input.reportValidity();
//       return;
//     }
//   }

//   console.log("fieldset valid");
// });


const input = document.querySelector('input')
const error = document.querySelector('.error')
const form = document.querySelector('form')

input.addEventListener('blur', (event) => {
    console.log(event)

    if (!input.validity.valid){
        error.textContent ='Vul een correcte naam in'
        input.setAttribute('aria-describedby', 'error-id')
        input.focus()
    } else {
        input.removeAttribute('aria-describedby')
        error.textContent =""
    }
})
