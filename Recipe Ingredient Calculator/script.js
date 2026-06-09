// JavaScript file
// Elements
const originalServings = document.getElementById('originalServings');
const desiredServings = document.getElementById('desiredServings');
const ingredientAmount = document.getElementById('ingredientAmount');
const calculateBtn = document.getElementById('calculateBtn');
const scaledAmountDisplay = document.getElementById('scaledAmount');

// Event Listener: Calculate
calculateBtn.addEventListener('click', () => {
    const original = parseInt(originalServings.value, 10);
    const desired = parseInt(desiredServings.value, 10);
    const ingredient = parseFloat(ingredientAmount.value);

    if (isNaN(original) || isNaN(desired) || isNaN(ingredient) || original <= 0 || desired <= 0 || ingredient < 0) {
        alert('Please provide valid input values.');
        return;
    }

    const scaledAmount = scaleIngredient(original, desired, ingredient);
    scaledAmountDisplay.textContent = scaledAmount.toFixed(2);
});

// Function to scale ingredient amount
function scaleIngredient(original, desired, ingredient) {
    return ingredient * (desired / original);
}
