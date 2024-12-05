document.addEventListener("DOMContentLoaded", function() {
    // Array to store courses in the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartContainer = document.querySelector('.cart-items');

    // Function to render the cart items
    function renderCart() {
        cartContainer.innerHTML = '';
        cart.forEach((course, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${course.name}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    // Function to remove a course from the cart
    function removeCourse(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Event listener for remove buttons
    cartContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.getAttribute('data-index');
            removeCourse(index);
        }
    });

    // Render cart on page load
    renderCart();
});

// Function to add course to cart
function addToCart(courseName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: courseName });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${courseName} has been added to your cart!`);
}

// Example usage: addToCart('Korean Language Course');

document.addEventListener("DOMContentLoaded", function() {
    // Array to store courses in the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartContainer = document.querySelector('.cart-items');
    const paymentForm = document.getElementById('paymentForm');
    const itemsList = document.getElementById('itemsList');
    const totalCostInput = document.getElementById('totalCost');

    // Function to render the cart items
    function renderCart() {
        cartContainer.innerHTML = '';
        cart.forEach((course, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${course.name}</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        // Update items in payment form
        updatePaymentForm();
    }

    // Function to remove a course from the cart
    function removeCourse(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Event listener for remove buttons
    cartContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
            const index = e.target.getAttribute('data-index');
            removeCourse(index);
        }
    });

    // Function to show payment form
    window.showPaymentForm = function() {
        paymentForm.style.display = 'block';
    }

    // Function to update payment form
    function updatePaymentForm() {
        itemsList.innerHTML = '';
        let totalCost = 0;

        cart.forEach((course) => {
            // const listItem = document.createElement('li');
            // listItem.textContent = course.name;
            // itemsList.appendChild(listItem);

            // Assuming each course has a property 'price'
            totalCost += course.price || 0; // Default to 0 if no price is set
        });

        totalCostInput.value = `$${totalCost.toFixed(2)}`;
    }

    // Event listener for checkout form submission
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your purchase!');
        paymentForm.style.display = 'none';
        localStorage.removeItem('cart');
        cart = [];
        renderCart();
    });

    // Render cart on page load
    renderCart();
});

// Function to add course to cart
function addToCart(courseName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: courseName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${courseName} has been added to your cart!`);
}

document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemsList = document.getElementById('itemsList');
    let totalCostInput = document.getElementById('totalCost');

    // Populate the cart items
    let totalCost = 0;
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price.toFixed(2)} Kyats`;
        itemsList.appendChild(listItem);
        totalCost += item.price;
    });

    // Update the total cost
    totalCostInput.value = `${totalCost.toFixed(2)} Kyats`;
});

// Show payment form when the Buy Now button is clicked
function showPaymentForm() {
    document.getElementById('paymentForm').style.display = 'block';
}


