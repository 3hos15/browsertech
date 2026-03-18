// const getrouwdNee = document.getElementById('getrouwdnee');
// const akteNee = document.getElementById('aktenee');
// const kinderenNee = document.getElementById('kinderennee');
// const testamentNee = document.getElementById('testamentnee');

// function removeRequired(fieldsetId) {
//     const fieldset = document.getElementById(fieldsetId);
//     if (!fieldset) return;
//     fieldset.querySelectorAll('input, select, textarea').forEach(field => field.removeAttribute('required'));
// }

// function restoreRequired(fieldsetId) {
//     const fieldset = document.getElementById(fieldsetId);
//     if (!fieldset) return;
//     fieldset.querySelectorAll('input, select, textarea').forEach(field => {
//         if (field.dataset.wasRequired === "true") field.setAttribute('required', '');
//     });
// }

// document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
//     field.dataset.wasRequired = "true";
// });

// getrouwdNee?.addEventListener('change', () => {
//     if (getrouwdNee.checked) {
//         removeRequired('overledene-akte');
//         removeRequired('overledene-verrekenbeding');
//         removeRequired('partnerschapsvoorwaarden');
//     } else {
//         restoreRequired('overledene-akte');
//         restoreRequired('overledene-verrekenbeding');
//         restoreRequired('partnerschapsvoorwaarden');
//     }
// });

// akteNee?.addEventListener('change', () => {
//     if (akteNee.checked) {
//         removeRequired('overledene-verrekenbeding');
//         removeRequired('partnerschapsvoorwaarden');
//     } else {
//         restoreRequired('overledene-verrekenbeding');
//         restoreRequired('partnerschapsvoorwaarden');
//     }
// });

// kinderenNee?.addEventListener('change', () => {
//     if (kinderenNee.checked) {
//         removeRequired('kinderen-overleden');
//         removeRequired('kinderen-kind');
//     } else {
//         restoreRequired('kinderen-overleden');
//         restoreRequired('kinderen-kind');
//     }
// });

// testamentNee?.addEventListener('change', () => {
//     if (testamentNee.checked) {
//         removeRequired('datum-testament');
//         removeRequired('overledene-testament');
//         removeRequired('gegevens-notaris');
//     } else {
//         restoreRequired('datum-testament');
//         restoreRequired('overledene-testament');
//         restoreRequired('gegevens-notaris');
//     }
// });