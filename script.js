document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Fetch product data from our local JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                // Create a new element for each product
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                // Populate the card with product data
                productCard.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <a href="${product.affiliateUrl}" class="buy-button" target="_blank">Buy on Amazon</a>
                `;

                // Add the new card to the grid
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            productGrid.innerHTML = '<p>Sorry, we could not load the products at this time.</p>';
        });
});