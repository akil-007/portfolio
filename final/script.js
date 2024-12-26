// Initialize AOS (Animate On Scroll) for smooth animations
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
});

// EmailJS integration for form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Collecting form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Adding loading animation for feedback while sending
    document.querySelector('.btn').innerHTML = 'Sending...';
    document.querySelector('.btn').style.background = '#ff6ec7'; // Change button color to show activity

    // Send email using EmailJS
    emailjs.send('service_ffyywuj', 'template_iu0549h', {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            // Success callback
            alert('Message sent successfully! I will get back to you soon.');
            document.querySelector('form').reset(); // Reset form fields
            document.querySelector('.btn').innerHTML = 'Send Message'; // Reset button text
            document.querySelector('.btn').style.background = 'linear-gradient(90deg, #ff6ec7, #f9a8d4)'; // Reset button color
        },
        function (error) {
            // Error callback
            alert('Failed to send message. Please try again later.');
            document.querySelector('.btn').innerHTML = 'Send Message'; // Reset button text
            document.querySelector('.btn').style.background = 'linear-gradient(90deg, #ff6ec7, #f9a8d4)'; // Reset button color
        }
    );
});

// Function to toggle the active state on button hover
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.transform = 'scale(1.05)'; // Slightly enlarge button on hover
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1)'; // Reset button size
    });
});