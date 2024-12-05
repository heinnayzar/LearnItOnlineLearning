document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const email = document.querySelector('input[name="email"]').value;

    // Here you can add your logic to handle the email, like sending it to a server or displaying an alert
    alert(`Thank you for subscribing with email: ${email}`);
});
