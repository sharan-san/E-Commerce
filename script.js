// script.js

// Get all elements with the class "product-card"
const productCards = document.querySelectorAll('.product-card');

// Add a click event listener to each "Add to Cart" button
productCards.forEach(card => {
    const addToCartButton = card.querySelector('button');

    addToCartButton.addEventListener('click', () => {
        const productName = card.querySelector('h3').innerText;
        alert(`Added ${productName} to the cart!`);
    });
});
