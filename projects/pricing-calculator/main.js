// grab DOM elements
const priceInput = document.querySelector('#price');
const quantityInput = document.querySelector('#quantity');
const total = document.querySelector('#total');
const quantityLabel = document.querySelector('#quantityLabel');

// create functions
function calculatePieCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const cost = price * quantity; 
    console.log(cost);
    total.innerText = '$' + cost.toFixed(2);
    quantityLabel.innerText = quantity; 
}

// add event listeners
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);

// on first run 
calculatePieCost();

