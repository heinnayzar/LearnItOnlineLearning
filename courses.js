document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const courseCards = document.querySelectorAll(".course-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.getAttribute("data-category");

            courseCards.forEach(card => {
                // If category is 'all', display all cards
                if (category === "all") {
                    card.style.display = "block";
                } else {
                    // Otherwise, display cards that match the selected category
                    if (card.classList.contains(category)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });
});

function addToCart(courseName, coursePrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: courseName, price: coursePrice });
    localStorage.setItem('cart', JSON.stringify(cart));
}
