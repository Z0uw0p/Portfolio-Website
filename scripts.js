// Handle form submission for the contact form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // Here, you can add the functionality to send the form data to your email using an API.
    } else {
        alert('Please fill in all fields.');
    }
});
